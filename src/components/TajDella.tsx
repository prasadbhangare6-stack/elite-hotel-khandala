'use client';

import React, { useRef, useState } from 'react';
import { ATTRACTIONS, HOTEL_INFO } from '@/data/hotelData';
import { Star, ChevronLeft, ChevronRight, MapPin, Clock, ShieldCheck, BadgeCheck, MessageCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import { RevealWords } from './Cinematic';

const wa = (msg: string) => `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ===== Taj-style sticky property sub-nav (appears in flow, sticks under header) ===== */
const SUBNAV = [
  { label: 'Rooms & Suites', href: 'rooms' }, { label: 'Overview', href: 'about' }, { label: 'Offers', href: 'offers' },
  { label: 'Dining', href: 'dining' }, { label: 'Experiences', href: 'experiences' }, { label: 'Gallery', href: 'gallery' },
  { label: 'Local Attractions', href: 'location' },
];
export function StickySubNav() {
  const [active, setActive] = useState('rooms');

  React.useEffect(() => {
    const ids = SUBNAV.map((s) => s.href);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="sticky top-[57px] md:top-[88px] z-30 bg-[#FBF6EC]/95 backdrop-blur-md border-y border-[#C5A880]/25 shadow-[0_8px_30px_rgba(16,13,10,0.06)]">
      <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto no-scrollbar">
        {SUBNAV.map((l) => (
          <button key={l.href} onClick={() => { setActive(l.href); document.getElementById(l.href)?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`relative whitespace-nowrap px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#96754A] after:transition-transform after:duration-300 ${active === l.href ? 'text-[#96754A] after:scale-x-100' : 'text-stone-500 hover:text-[#181410] after:scale-x-0 hover:after:scale-x-100'}`}>
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ===== Della-style trust/awards strip (honest badges only — no fake awards) ===== */
export function TrustStrip() {
  const badges = [
    { icon: Star, title: `${HOTEL_INFO.rating} / 5 on Google`, sub: `${HOTEL_INFO.reviewCount.toLocaleString()}+ verified reviews` },
    { icon: BadgeCheck, title: 'Listed on Cleartrip', sub: '₹2,468 · Oct 20–21 live rate' },
    { icon: BadgeCheck, title: 'Listed on MakeMyTrip', sub: '₹2,557 · free breakfast listing' },
    { icon: ShieldCheck, title: 'Book Direct & Save', sub: 'Best rate · priority check-in' },
    { icon: MapPin, title: 'Opposite Kamat Hotel', sub: 'B P Road · 800m to station' },
  ];
  return (
    <section className="bg-white border-b border-stone-200/80 py-8" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal variant="fade">
          <div className="flex flex-wrap items-stretch justify-center gap-x-10 gap-y-5">
            {badges.map((b) => (
              <div key={b.title} className="flex items-center gap-3 group">
                <span className="w-11 h-11 rounded-full border border-[#C5A880]/50 flex items-center justify-center text-[#96754A] group-hover:bg-[#C5A880] group-hover:text-[#181410] transition-all duration-300"><b.icon className="w-5 h-5" /></span>
                <span><span className="block font-display text-[15px] text-[#181410] leading-tight">{b.title}</span><span className="block text-[11px] text-stone-500 mt-0.5">{b.sub}</span></span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Della-style tabbed Offers carousel (enquiry-based, no invented prices) ===== */
const OFFERS: Record<string, { img: string; title: string; desc: string; meta: string }[]> = {
  Stay: [
    { img: '/images/hotel/balcony-room.jpg', title: 'Direct Booking Privilege', desc: 'Best available direct rate with priority check-in and personal front-desk assistance — zero OTA commission in between.', meta: 'From ₹2,468 / night · WhatsApp to confirm' },
    { img: '/images/hotel/real-room-gold.jpg', title: 'Weekend Balcony Escape', desc: 'Super Deluxe Balcony Room for Mumbai–Pune weekenders. Morning mist, ginger chai, late enquiry assistance subject to availability.', meta: 'Enquire for weekend rate' },
    { img: '/images/hotel/executive-suite.jpg', title: 'Family Suite Stay', desc: 'Executive Suite with soaking tub and lounge for up to 4 guests. Extra space, priority concierge, in-room dining.', meta: 'Enquire for family rate' },
  ],
  Dining: [
    { img: '/images/hotel/real-restaurant.jpg', title: 'In-House Multi-Cuisine', desc: 'Maharashtrian and North Indian favourites served hot in the Buddha hall or delivered to your balcony.', meta: 'Breakfast · Lunch · Dinner · Room service' },
    { img: '/images/hotel/restaurant.jpg', title: 'Evening at the Bar', desc: 'Evening refreshments and bar service after a day at Kune Falls and Duke’s Nose.', meta: 'Enquire at front desk' },
  ],
  Experiences: [
    { img: '/images/hotel/real-kune-falls.jpg', title: 'Monsoon Waterfall Trail', desc: 'Kune Falls (5 mins), Bhushi Dam and Tiger’s Leap in one monsoon circuit. Auto/cab arranged at reception.', meta: 'Best Jun–Sep · arranged at desk' },
    { img: '/images/hotel/real-dukes-nose.jpg', title: 'Duke’s Nose Sunset Trek', desc: 'Golden-hour hike to the Nagphani cliff for 360° Sahyadri sunsets, 12 minutes from your room.', meta: '4.2 km · sunset recommended' },
    { img: '/images/hotel/real-karla-bhaja.jpg', title: 'Ancient Caves Circuit', desc: 'Karla and Bhaja — 2nd-century BC rock-cut Buddhist caves carved into basalt, 25 minutes away.', meta: '14 km · half-day trip' },
  ],
};

export function OffersTabs() {
  const [tab, setTab] = useState<keyof typeof OFFERS>('Stay');
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => trackRef.current?.scrollBy({ left: dir * 380, behavior: 'smooth' });
  return (
    <section id="offers" className="py-24 sm:py-28 bg-[#181410] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="clip">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.34em] font-bold text-[#C5A880]">O f f e r s</div>
              <h2 className="font-display text-4xl sm:text-5xl font-normal mt-3"><RevealWords text="Stay, Dine & Wander — The Elite Way." /></h2>
              <p className="text-stone-400 text-sm mt-3 max-w-xl">Della-style packages, Taj-style restraint: no invented discounts — every offer is confirmed personally on WhatsApp at the best direct rate.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scrollBy(-1)} aria-label="Previous offers" className="w-11 h-11 border border-white/20 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center rounded-sm transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollBy(1)} aria-label="Next offers" className="w-11 h-11 border border-white/20 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center rounded-sm transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex gap-2 mb-8 flex-wrap" role="tablist" aria-label="Offer categories">
          {(Object.keys(OFFERS) as (keyof typeof OFFERS)[]).map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
              className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] rounded-sm transition-all duration-300 ${tab === k ? 'bg-[#C5A880] text-[#181410]' : 'border border-white/20 text-stone-300 hover:border-[#C5A880]/60 hover:text-white'}`}>{k}</button>
          ))}
        </div>

        <div key={tab} ref={trackRef} className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-row">
          {OFFERS[tab].map((o, i) => (
            <article key={o.title} className="group shrink-0 w-[82vw] sm:w-[400px] bg-[#211B16] border border-white/10 overflow-hidden rounded-sm animate-fade-up" style={{ animationDelay: `${i * 110}ms` }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.img} alt={o.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
                <span className="absolute bottom-3 left-3 bg-[#100D0A]/85 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9C29A]">{o.meta}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-normal">{o.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed mt-2 min-h-[63px]">{o.desc}</p>
                <a href={wa(`Hello Elite Hotel Khandala, I would like to enquire about: ${o.title}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C5A880] hover:text-[#D9C29A] transition-colors">
                  <MessageCircle className="w-4 h-4" /> Enquire Now
                  <span className="block h-px flex-1 bg-[#C5A880]/40" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Taj-style Experiences spec cards with MORE expand (verified specs only) ===== */
export function ExperiencesCarousel() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => trackRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' });
  return (
    <section id="experiences" className="py-24 sm:py-28 bg-white text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="clip">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.34em] font-bold text-[#96754A]">E x p e r i e n c e s</div>
              <h2 className="font-display text-4xl sm:text-5xl font-normal mt-3 leading-[1.1]">Timeless Khandala, <span className="font-editorial italic text-[#96754A]">Curated.</span></h2>
              <p className="text-stone-500 text-sm mt-3">In the Taj manner — each experience presented as a specification card. Distances and drive times verified from B P Road.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scrollBy(-1)} aria-label="Previous experiences" className="w-11 h-11 border border-stone-300 hover:border-[#96754A] hover:text-[#96754A] flex items-center justify-center rounded-sm transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollBy(1)} aria-label="Next experiences" className="w-11 h-11 border border-stone-300 hover:border-[#96754A] hover:text-[#96754A] flex items-center justify-center rounded-sm transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <div ref={trackRef} className="flex gap-6 overflow-x-auto pb-4 px-4 sm:px-8 no-scrollbar snap-row max-w-[1400px] mx-auto">
        {ATTRACTIONS.map((a, i) => (
          <article key={a.name} className="group shrink-0 w-[84vw] sm:w-[420px] border border-stone-200 bg-[#FBF6EC] overflow-hidden rounded-sm hover:shadow-[0_24px_50px_rgba(16,13,10,0.14)] hover:-translate-y-1.5 transition-all duration-500">
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image} alt={a.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[1300ms] group-hover:scale-[1.07]" />
              <span className="absolute top-3 left-3 bg-[#100D0A]/85 text-[#EFE3CC] text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1">{a.type}</span>
              <span className="absolute bottom-3 right-3 bg-[#100D0A]/85 text-white text-xs px-2.5 py-1 flex items-center gap-1"><Clock className="w-3 h-3 text-[#C5A880]" />{a.driveTime}</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-[22px] font-normal uppercase tracking-wide leading-snug">{a.name}</h3>
              <p className={`text-sm text-stone-500 leading-relaxed mt-2 ${expanded === i ? '' : 'line-clamp-2'}`}>{a.description}</p>
              <button onClick={() => setExpanded(expanded === i ? null : i)} className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#96754A] hover:text-[#7A5F38]">{expanded === i ? 'Less −' : 'More +'}</button>
              <div className={`grid transition-all duration-500 ${expanded === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="border-t border-stone-200 pt-4 text-[13px] space-y-1.5 text-stone-600">
                    <div className="flex justify-between"><span className="text-stone-400 uppercase tracking-wider text-[11px] font-bold">Specification 1 · Distance</span><strong>{a.distance}</strong></div>
                    <div className="flex justify-between"><span className="text-stone-400 uppercase tracking-wider text-[11px] font-bold">Specification 2 · Drive Time</span><strong>{a.driveTime}</strong></div>
                    <div className="flex justify-between"><span className="text-stone-400 uppercase tracking-wider text-[11px] font-bold">Specification 3 · Category</span><strong>{a.type}</strong></div>
                    <p className="pt-2 text-xs text-stone-400 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#96754A]" /> Auto-rickshaw & local cab arranged at reception.</p>
                  </div>
                </div>
              </div>
              <a href={wa(`Hello Elite Hotel Khandala, please help me plan a visit to ${a.name}.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 py-3 bg-[#181410] hover:bg-[#96754A] text-white text-[11px] font-bold uppercase tracking-[0.16em] rounded-sm transition-colors">Enquire Now</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
