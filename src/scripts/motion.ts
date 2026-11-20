/**
 * Shared motion setup: smooth scrolling (Lenis) and quiet scroll reveals
 * (GSAP ScrollTrigger).
 *
 *   data-reveal          element fades in with a small lift as it enters
 *   data-reveal="clip"   image frame wipes open
 *
 * Everything is skipped when the visitor prefers reduced motion.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Keep animations in real time even when frames are delayed (background tabs, slow devices).
gsap.ticker.lagSmoothing(0);

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

if (!reduceMotion) {
  lenis = new Lenis({ lerp: 0.12, anchors: { offset: -96 }, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  window.addEventListener('bsrf:scroll-lock', () => lenis?.stop());
  window.addEventListener('bsrf:scroll-unlock', () => lenis?.start());
}

if (import.meta.env.DEV) {
  (window as unknown as { gsap: typeof gsap }).gsap = gsap;
}

function initReveals() {
  if (reduceMotion) return;

  // Hide fade targets first; the batch below reveals them as they scroll into view.
  gsap.set('[data-reveal]:not([data-reveal="clip"])', { opacity: 0 });
  ScrollTrigger.batch('[data-reveal]:not([data-reveal="clip"])', {
    start: 'top 90%',
    once: true,
    onEnter: (els) =>
      gsap.fromTo(
        els,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.06, overwrite: true },
      ),
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal="clip"]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.1,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });
}

initReveals();

// Layout can shift once fonts and images arrive; re-measure trigger positions.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh());

export { gsap, ScrollTrigger, lenis };
