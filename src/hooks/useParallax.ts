'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll-linked parallax (Master Sec 8/11).
 * Single rAF loop per element, lerp-smoothed, transform-only (no layout thrash).
 * Disabled for reduced-motion and on touch/small screens by the caller via `speed`.
 * Returns a ref to attach to the moving layer. Cleanup on unmount.
 */
export function useParallax<T extends HTMLElement>(speed = 0.18, max = 90, scale = 1.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let current = 0;
    let inView = true;

    const parent = el.parentElement;
    let io: IntersectionObserver | null = null;
    if (parent) {
      io = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView && !raf) raf = requestAnimationFrame(loop);
        },
        { rootMargin: '120px 0px 120px 0px' }
      );
      io.observe(parent);
    }

    const loop = () => {
      if (!inView) {
        raf = 0;
        return;
      }
      const rect = parent?.getBoundingClientRect();
      if (rect) {
        const vh = window.innerHeight || 1;
        const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - vh / 2) / vh));
        const target = Math.max(-max, Math.min(max, progress * speed * -160));
        current += (target - current) * 0.08; // lerp = physically natural ease
        el.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      if (io) io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, max, scale]);

  return ref;
}
