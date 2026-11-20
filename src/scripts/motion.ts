/**
 * Smooth scrolling (Lenis). Section reveals are pure CSS (`.reveal`, driven by
 * scroll position), so there is nothing to hide or wait for here.
 * Skipped entirely when the visitor prefers reduced motion.
 */
import Lenis from 'lenis';

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

if (!reduceMotion) {
  lenis = new Lenis({ lerp: 0.12, anchors: { offset: -88 }, autoRaf: true });
  window.addEventListener('bsrf:scroll-lock', () => lenis?.stop());
  window.addEventListener('bsrf:scroll-unlock', () => lenis?.start());
}

export { lenis };
