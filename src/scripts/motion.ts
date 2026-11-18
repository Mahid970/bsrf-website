/**
 * Shared motion setup: smooth scrolling (Lenis), scroll-triggered animation
 * (GSAP ScrollTrigger) and a few declarative reveal helpers.
 *
 *   data-reveal="words"  heading words rise out of a mask
 *   data-reveal="fade"   element fades and lifts in
 *   data-reveal="clip"   image wipes up while it settles from a slight zoom
 *   data-reveal-stagger  children fade in one after another
 *   data-parallax="0.12" element drifts against the scroll (fraction of its height)
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Real-time animation even when frames are delayed (background tabs, slow devices).
gsap.ticker.lagSmoothing(0);

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

if (!reduceMotion) {
  lenis = new Lenis({ lerp: 0.11, anchors: { offset: -72 }, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  window.addEventListener('bsrf:scroll-lock', () => lenis?.stop());
  window.addEventListener('bsrf:scroll-unlock', () => lenis?.start());
}

if (import.meta.env.DEV) {
  (window as unknown as { gsap: typeof gsap }).gsap = gsap;
}

/** Wrap each word of an element in a mask so it can rise into view. */
export function splitWords(el: HTMLElement) {
  if (el.dataset.split) return [...el.querySelectorAll<HTMLElement>('.line-inner')];
  const text = el.textContent?.trim().replace(/\s+/g, ' ') ?? '';
  el.setAttribute('aria-label', text);
  el.textContent = '';
  const inners = text.split(' ').map((word, i, all) => {
    const outer = document.createElement('span');
    outer.className = 'line';
    outer.style.display = 'inline-block';
    outer.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.className = 'line-inner';
    inner.textContent = word;
    outer.append(inner);
    el.append(outer);
    if (i < all.length - 1) el.append(' ');
    return inner;
  });
  el.dataset.split = 'true';
  return inners;
}

function initReveals() {
  if (reduceMotion) return;

  gsap.utils.toArray<HTMLElement>('[data-reveal="words"]').forEach((el) => {
    const words = splitWords(el);
    gsap.from(words, {
      yPercent: 115,
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.05,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
    gsap.from(el, {
      y: 32,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      delay: Number(el.dataset.delay ?? 0),
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal="clip"]').forEach((el) => {
    const img = el.querySelector('img');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    tl.fromTo(
      el,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut' },
    );
    if (img) tl.from(img, { scale: 1.18, duration: 1.8, ease: 'expo.out' }, 0.1);
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((el) => {
    gsap.from(el.children, {
      y: 28,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 0.12);
    gsap.fromTo(
      el,
      { yPercent: -amount * 50 },
      {
        yPercent: amount * 50,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

initReveals();

// Layout can shift once fonts and images arrive; re-measure trigger positions.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh());

export { gsap, ScrollTrigger, lenis };
