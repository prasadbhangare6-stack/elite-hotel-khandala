'use client';

import React, { useEffect, useRef, useState } from 'react';

type Variant = 'fade-up' | 'fade' | 'slide-left' | 'slide-right' | 'clip' | 'scale' | 'line';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: Variant;
  as?: 'div' | 'span';
}

/**
 * Intersection-based reveal. One observer per element, disconnects after reveal.
 * Variants avoid the "same animation everywhere" trap (Master Sec 3B/3F).
 * Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  variant = 'fade-up',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }
    // Fail-safe: content must never stay hidden if IO is blocked/slow (preview iframes, JS hiccups)
    const fallback = setTimeout(() => setIsVisible(true), 600);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 80px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  const hidden: Record<Variant, string> = {
    'fade-up': 'opacity-0 translate-y-6',
    fade: 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-8',
    'slide-right': 'opacity-0 translate-x-8',
    clip: 'opacity-0 [clip-path:inset(0_0_100%_0)] translate-y-3',
    scale: 'opacity-0 scale-[0.98] translate-y-2',
    line: 'opacity-0 scale-x-0',
  };
  const shown: Record<Variant, string> = {
    'fade-up': 'opacity-100 translate-y-0',
    fade: 'opacity-100',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
    clip: 'opacity-100 [clip-path:inset(0_0_0%_0)] translate-y-0',
    scale: 'opacity-100 scale-100 translate-y-0',
    line: 'opacity-100 scale-x-100',
  };

  return (
    <div
      ref={ref}
      style={{ transitionDuration: '700ms', transitionDelay: `${delayMs}ms` }}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        isVisible ? shown[variant] : `${hidden[variant]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
