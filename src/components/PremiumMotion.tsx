'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Star, MapPin, Sparkles, ShieldCheck, TrendingDown } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

/* ---------- 1. Scroll progress bar (top, amber) ---------- */
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
        if (barRef.current) barRef.current.style.width = `${max > 0 ? (scrolled / max) * 100 : 0}%`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <div ref={barRef} className="h-full bg-gradient-to-r from-[#96754A] via-[#C5A880] to-[#D9C29A] shadow-[0_0_12px_rgba(197,168,128,0.7)]" style={{ width: '0%' }} />
    </div>
  );
}

/* ---------- 2. Infinite marquee strip ---------- */
export function MarqueeStrip() {
  const items = [
    'Kune Falls · 5 Mins', 'Private Mist Balconies', '4.8 ★ Rated by 2,243 Guests',
    'In-House Multi-Cuisine Dining', '800m from Khandala Station', 'Best Direct Rate — No OTA Commission',
    'Starting ₹2,468 / Night', 'Mumbai 80 km · Pune 68 km',
  ];
  const row = [...items, ...items];
  return (
    <div className="relative z-20 bg-[#181410] text-stone-300 overflow-hidden py-3.5 border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {row.map((it, i) => (
          <span key={i} className="mx-5 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase flex items-center gap-5">
            {it} <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- 3. Animated counters band ---------- */
function Counter({ to, decimals = 0, suffix = '' }: { to: number; decimals?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

export function StatsBand() {
  const stats = [
    { label: 'Google Rating', node: <Counter to={HOTEL_INFO.rating} decimals={1} />, sub: '★ ★ ★ ★ ★' },
    { label: 'Verified Reviews', node: <Counter to={HOTEL_INFO.reviewCount} suffix="+" />, sub: 'Google · Cleartrip · MakeMyTrip' },
    { label: 'To Khandala Station', node: <Counter to={800} suffix="m" />, sub: '3 mins by auto' },
    { label: 'To Kune Falls', node: <Counter to={5} suffix=" min" />, sub: '1.8 km drive' },
    { label: 'From Mumbai', node: <Counter to={80} suffix=" km" />, sub: '~90 mins expressway' },
    { label: 'From Pune', node: <Counter to={68} suffix=" km" />, sub: '~75 mins expressway' },
  ];
  return (
    <section className="bg-[#181410] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-cover bg-center" style={{ backgroundImage: "url('/images/hotel/balcony-mist.jpg')" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/[0.06] border border-[#C5A880]/20 rounded-sm px-4 py-5 text-center backdrop-blur-sm hover:border-[#C5A880]/60 hover:-translate-y-1 transition-all duration-300">
                <div className="font-display text-3xl sm:text-4xl text-[#D9C29A]">{s.node}</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">{s.label}</div>
                <div className="text-[11px] text-stone-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <p className="text-center text-xs text-stone-400 mt-6 flex flex-wrap items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Rated <strong className="text-white">{HOTEL_INFO.rating} / 5</strong> across {HOTEL_INFO.reviewCount.toLocaleString()}+ verified guest reviews — 3-star boutique hotel, B P Road, Opposite Kamat Hotel.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- 4. Parallax cinematic divider (rAF lerp, transform-only) ---------- */
export function ParallaxDivider({ image = '/images/hotel/real-kune-falls.jpg', title = 'Kune Falls. Five Minutes Away.', sub = 'India’s 14th highest waterfall — 200 metres of monsoon thunder, right on your doorstep.' }: { image?: string; title?: string; sub?: string }) {
  const layerRef = useParallax<HTMLDivElement>(0.22, 110);
  return (
    <section className="relative h-[58vh] min-h-[360px] overflow-hidden flex items-center justify-center text-center" aria-label={title}>
      <div ref={layerRef} className="absolute inset-0 will-change-transform">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#100D0A]/75 via-[#181410]/20 to-[#100D0A]/85" />
      <div className="relative z-10 px-4 max-w-3xl">
        <ScrollReveal variant="clip">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#D9C29A] font-semibold mb-4"><MapPin className="w-3.5 h-3.5" /> Real Khandala · Not Stock</div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.08] font-normal">{title}</h2>
          <p className="mt-4 text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed">{sub}</p>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
    </section>
  );
}

/* ---------- 5. Real moments — horizontal scroll filmstrip ---------- */
export function RealMomentsStrip() {
  const moments = [
    { img: '/images/hotel/real-entrance.jpg', title: 'The Real Entrance', sub: 'Glass lobby · festive welcome' },
    { img: '/images/hotel/real-room-gold.jpg', title: 'The Real Deluxe King', sub: 'Gold runner · ambient glow' },
    { img: '/images/hotel/real-restaurant.jpg', title: 'The Real Restaurant', sub: 'Buddha hall · valley windows' },
    { img: '/images/hotel/real-reception.jpg', title: 'The Real Reception', sub: '24/7 front desk · lounge' },
    { img: '/images/hotel/balcony-room.jpg', title: 'Balcony Mist Mornings', sub: 'Super Deluxe signature view' },
    { img: '/images/hotel/real-kune-falls.jpg', title: 'Real Kune Falls', sub: '5 mins · monsoon mist' },
    { img: '/images/hotel/real-dukes-nose.jpg', title: 'Real Duke’s Nose', sub: '12 mins · sunset trek' },
  ];
  return (
    <section className="py-20 bg-[#F3E9D7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#96754A]">Real Photos · Real Place</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-2 text-[#181410]">Moments at <span className="font-editorial italic text-[#96754A]">Elite, As They Are.</span></h2>
            <p className="text-sm text-stone-600 mt-3">No filters on trust — drag / scroll sideways through the actual entrance, rooms, restaurant and the real sights around Khandala.</p>
          </div>
        </ScrollReveal>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-4 px-4 sm:px-8 no-scrollbar snap-row">
        {moments.map((m, i) => (
          <article key={m.title} className="group relative shrink-0 w-[78vw] sm:w-[380px] h-[260px] rounded-sm overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.img} alt={m.title} className="absolute inset-0 w-full h-full object-cover img-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/85 via-transparent to-transparent" />
            <span className="absolute top-3 left-3 bg-[#181410]/85 backdrop-blur text-[#D9C29A] border border-[#C5A880]/40 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">{i < 4 ? '✓ Real Hotel Photo' : '✓ Real Location'}</span>
            <div className="absolute bottom-0 p-5 text-white">
              <h3 className="font-display text-xl">{m.title}</h3>
              <p className="text-xs text-stone-300">{m.sub}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- 6. Direct vs OTA price strip ---------- */
export function DirectVsOtaStrip({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="py-16 bg-[#FBF6EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-md overflow-hidden border border-[#C5A880]/40 shadow-[0_24px_50px_rgba(43,27,18,0.15)]">
            <div className="bg-gradient-to-r from-[#181410] via-[#241E18] to-[#234236] px-6 py-5 text-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-bold text-sm"><TrendingDown className="w-5 h-5 text-[#D9C29A]" /> Why smart guests book direct</div>
              <span className="text-[11px] uppercase tracking-widest text-[#D9C29A] font-bold">Live Google prices · Oct 20–21</span>
            </div>
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F3E9D7] bg-white text-center">
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500">Cleartrip</div>
                <div className="font-display text-3xl mt-1 text-stone-800">₹2,468</div>
                <div className="text-xs text-stone-500">Free breakfast · OTA fees apply</div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500">MakeMyTrip</div>
                <div className="font-display text-3xl mt-1 text-stone-800">₹2,557</div>
                <div className="text-xs text-stone-500">Free breakfast · OTA fees apply</div>
              </div>
              <button onClick={onOpenBooking} className="p-6 bg-[#FFF4E2] hover:bg-[#FDEBD0] transition-colors text-center group">
                <div className="text-xs font-bold uppercase tracking-wider text-[#96754A] flex items-center justify-center gap-1"><Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" /> Book Direct Here</div>
                <div className="font-display text-3xl mt-1 text-[#181410]">₹2,468<span className="text-sm"> / night*</span></div>
                <div className="text-xs font-semibold text-emerald-700 group-hover:underline">Best rate + priority check-in →</div>
              </button>
            </div>
            <p className="text-[11px] text-stone-400 text-center py-3 bg-white">*Starting rate shown on Google (Cleartrip, Oct 20–21). Direct WhatsApp bookings get best available rate, early-arrival assistance & zero middleman surcharge.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
