'use client';

import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';

/* ============ 1. Brand preloader — 1s cinematic open, slides away ============ */
export function Preloader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setGone(true); return; }
    const t1 = setTimeout(() => setHide(true), 800);
    const t2 = setTimeout(() => setGone(true), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (gone) return null;
  return (
    <div
      aria-hidden="true"
      onClick={() => setGone(true)}
      title="Click to skip"
      className={`fixed inset-0 z-[100] bg-[#100D0A] flex flex-col items-center justify-center cursor-pointer transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${hide ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0'}`}
    >
      <div className="flex overflow-hidden">
        {'ELITE'.split('').map((l, i) => (
          <span key={i} className="font-display text-5xl sm:text-7xl text-white inline-block animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>{l}</span>
        ))}
      </div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.5em] text-[#C5A880] animate-fade-up" style={{ animationDelay: '400ms' }}>Khandala · Sahyadris</div>
      <div className="mt-8 h-px w-44 bg-white/10 overflow-hidden"><div className="h-full bg-[#C5A880] origin-left animate-[loadbar_0.8s_ease_forwards]" /></div>
      <style>{`@keyframes loadbar{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </div>
  );
}

/* ============ 2. Film grain — cinematic texture, near-invisible ============ */
export function FilmGrain() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[4] opacity-[0.035] mix-blend-overlay"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E")` }} />
  );
}

/* ============ 3. Side section dots (desktop) ============ */
const DOTS = [
  { id: 'about', label: 'About' }, { id: 'rooms', label: 'Rooms' }, { id: 'dining', label: 'Dining' },
  { id: 'gallery', label: 'Gallery' }, { id: 'reviews', label: 'Reviews' }, { id: 'location', label: 'Location' }, { id: 'contact', label: 'Contact' },
];
export function SideDots() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-20% 0px -40% 0px' });
    DOTS.forEach((d) => { const el = document.getElementById(d.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav aria-label="Section navigation" className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3.5">
      {DOTS.map((d) => (
        <button key={d.id} onClick={() => document.getElementById(d.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-2.5 flex-row-reverse" aria-label={d.label}>
          <span className={`rounded-full transition-all duration-500 shadow ${active === d.id ? 'w-2.5 h-2.5 bg-[#C5A880] ring-4 ring-[#C5A880]/25' : 'w-1.5 h-1.5 bg-stone-400/70 group-hover:bg-[#C5A880]'}`} />
          <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold px-2 py-1 bg-[#100D0A]/80 backdrop-blur text-[#EFE3CC] rounded-sm transition-all duration-300 ${active === d.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>{d.label}</span>
        </button>
      ))}
    </nav>
  );
}

/* ============ 4. Word-by-word heading reveal ============ */
export function RevealWords({ text, className = '', italicWords = [] }: { text: string; className?: string; italicWords?: string[] }) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOn(true); return; }
    const fallback = setTimeout(() => setOn(true), 800);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.1, rootMargin: '0px 0px 80px 0px' });
    io.observe(el); return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden="true" className={`inline-block transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${italicWords.includes(w) ? 'font-editorial italic text-[#96754A]' : ''} ${on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${i * 85}ms` }}>{w}&nbsp;</span>
      ))}
    </span>
  );
}

/* ============ 5. Magnetic CTA (desktop, subtle) ============ */
export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current; if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${((e.clientX - r.left) / r.width - 0.5) * 10}px, ${((e.clientY - r.top) / r.height - 0.5) * 8}px)`;
  };
  return <div ref={ref} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; }} className="transition-transform duration-300 ease-out inline-block">{children}</div>;
}

/* ============ 6. PINNED horizontal-scroll Moments (desktop) + swipe (mobile) ============ */
const MOMENTS = [
  { img: '/images/hotel/real-entrance.jpg', title: 'The Real Entrance', sub: 'Glass lobby · festive welcome', tag: 'Real Hotel Photo' },
  { img: '/images/hotel/real-room-gold.jpg', title: 'The Real Deluxe King', sub: 'Gold runner · ambient glow', tag: 'Real Hotel Photo' },
  { img: '/images/hotel/real-restaurant.jpg', title: 'The Real Restaurant', sub: 'Buddha hall · valley windows', tag: 'Real Hotel Photo' },
  { img: '/images/hotel/real-reception.jpg', title: 'The Real Reception', sub: '24/7 front desk · lounge', tag: 'Real Hotel Photo' },
  { img: '/images/hotel/balcony-room.jpg', title: 'Balcony Mist Mornings', sub: 'Super Deluxe signature view', tag: 'Signature View' },
  { img: '/images/hotel/real-kune-falls.jpg', title: 'Real Kune Falls', sub: '5 mins · monsoon mist', tag: 'Real Location' },
  { img: '/images/hotel/real-dukes-nose.jpg', title: 'Real Duke’s Nose', sub: '12 mins · sunset trek', tag: 'Real Location' },
];

function MomentCard({ m, i, wide }: { m: typeof MOMENTS[0]; i: number; wide?: boolean }) {
  return (
    <article className={`group relative shrink-0 overflow-hidden shadow-2xl ${wide ? 'w-[72vw] sm:w-[560px] h-[62vh] min-h-[380px]' : 'w-[78vw] sm:w-[380px] h-[260px]'} rounded-sm`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={m.img} alt={m.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/90 via-[#100D0A]/10 to-transparent" />
      <span className="absolute top-4 left-4 bg-[#100D0A]/85 backdrop-blur text-[#D9C29A] border border-[#C5A880]/40 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">✓ {m.tag}</span>
      <span className="absolute top-4 right-5 font-editorial italic text-white/50 text-2xl">0{i + 1}</span>
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className={`font-display font-normal ${wide ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>{m.title}</h3>
        <p className="text-sm text-stone-300 mt-1">{m.sub}</p>
      </div>
    </article>
  );
}

export function PinnedMoments() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      const wrap = wrapRef.current, track = trackRef.current;
      if (wrap && track && window.innerWidth >= 1024) {
        const r = wrap.getBoundingClientRect();
        const total = wrap.offsetHeight - window.innerHeight;
        const p = Math.max(0, Math.min(1, total > 0 ? -r.top / total : 0));
        const maxX = Math.max(0, track.scrollWidth - window.innerWidth + 80);
        track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      }
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="bg-[#F3E9D7] overflow-x-clip" aria-label="Real moments at Elite Hotel">
      {/* Desktop: pinned horizontal journey */}
      <div ref={wrapRef} className="hidden lg:block relative h-[340vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full mb-8">
            <div className="text-[11px] uppercase tracking-[0.28em] font-bold text-[#96754A]">Real Photos · Real Place — Keep Scrolling →</div>
            <h2 className="font-display text-5xl mt-3 text-[#181410] font-normal">Moments at <span className="font-editorial italic text-[#96754A]">Elite, As They Are.</span></h2>
          </div>
          <div ref={trackRef} className="flex gap-6 pl-8 will-change-transform">
            {MOMENTS.map((m, i) => <MomentCard key={m.title} m={m} i={i} wide />)}
            <div className="shrink-0 w-[380px] h-[62vh] min-h-[380px] bg-[#181410] text-white flex flex-col items-center justify-center text-center p-8">
              <div className="font-editorial italic text-[#D9C29A] text-xl">Next chapter</div>
              <div className="font-display text-3xl mt-2">Your stay begins here.</div>
              <a href="#rooms" className="mt-6 px-6 py-3 bg-[#C5A880] hover:bg-[#D9C29A] text-[#181410] text-xs font-bold uppercase tracking-[0.16em] rounded-sm transition-colors">Explore Rooms</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-8 w-full mt-8"><div className="h-px bg-[#181410]/15"><div ref={barRef} className="h-full bg-[#96754A] origin-left" style={{ transform: 'scaleX(0)' }} /></div></div>
        </div>
      </div>
      {/* Mobile/tablet: native swipe */}
      <div className="lg:hidden py-20">
        <div className="px-4 mb-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#96754A]">Real Photos · Real Place</div>
          <h2 className="font-display text-3xl mt-2 text-[#181410]">Moments at <span className="font-editorial italic text-[#96754A]">Elite, As They Are.</span></h2>
          <p className="text-xs text-stone-500 mt-2">Swipe sideways →</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 no-scrollbar snap-row">
          {MOMENTS.map((m, i) => <MomentCard key={m.title} m={m} i={i} />)}
        </div>
      </div>
    </section>
  );
}
