'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Calendar, ChevronDown, MapPin, Star, Sparkles } from 'lucide-react';
import { Magnetic } from './Cinematic';

interface HeroProps { onOpenBooking: () => void; }

const HERO_SLIDES = [
  { src: '/images/hotel/exterior.jpg', label: 'Sahyadri Valley View' },
  { src: '/images/hotel/balcony-room.jpg', label: 'Super Deluxe Balcony — Mist Mornings' },
  { src: '/images/hotel/balcony-mist.jpg', label: 'Balcony Mist · Sahyadri Mornings' },
  { src: '/images/hotel/real-kune-falls.jpg', label: 'Real Kune Falls · 5 Mins Away' },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [slide, setSlide] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5200);
    return () => clearInterval(id);
  }, []);

  // Parallax via direct DOM transform — no React re-render on scroll (fixes scroll jank)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-20 sm:pt-36 sm:pb-24 overflow-hidden bg-[#100D0A]">
      {/* Cinematic crossfading slideshow + parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden will-change-transform">
        {HERO_SLIDES.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={s.src} src={s.src} alt={s.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ${i === slide ? 'opacity-100 animate-kenburns' : 'opacity-0'}`} loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'low'} />
        ))}
        <div className="absolute inset-0 sunset-hero-overlay" />
        {/* drifting mist */}
        <div className="absolute top-[22%] -left-10 w-72 h-16 bg-white/15 blur-3xl rounded-full animate-mist" />
        <div className="absolute top-[38%] right-0 w-96 h-20 bg-white/10 blur-3xl rounded-full animate-mist" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="animate-fade-up delay-100 inline-flex items-center space-x-2 bg-[#181410]/80 backdrop-blur-md border border-[#C5A880]/40 px-3.5 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#EFE3CC] font-medium">Boutique Sanctuary in Khandala · 3-Star Hotel</span>
        </div>

        <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[5.2rem] font-normal tracking-tight text-white leading-[1.06] mb-6 max-w-4xl" aria-label="Where Sahyadri Mist Meets Refined Mountain Comfort.">
          {['Where','Sahyadri','Mist','Meets'].map((w,i)=>(
            <span key={w} className="inline-block animate-fade-up" style={{animationDelay:`${250+i*110}ms`}}>{w}&nbsp;</span>
          ))}
          <span className="font-editorial italic text-[#EFE3CC] inline-block animate-fade-up" style={{animationDelay:'750ms'}}>Refined Mountain Comfort.</span>
        </h1>

        <p className="animate-fade-up delay-300 max-w-2xl text-stone-200 text-sm sm:text-base font-light leading-relaxed mb-7">
          Escape city bustle for tranquil mountain air. Spacious AC rooms, scenic balcony suites over rolling valley mist, hot in-house dining — and Kune Falls just five minutes away.
        </p>

        {/* Real Google trust bar */}
        <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-5 text-xs text-stone-200">
          <div className="flex items-center space-x-1.5 bg-[#181410]/75 backdrop-blur px-3 py-2 rounded-full border border-[#C5A880]/30">
            <span className="flex">{[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />)}</span>
            <span className="font-bold text-white">{HOTEL_INFO.rating}</span>
            <span className="text-stone-300">({HOTEL_INFO.reviewCount.toLocaleString()} Google reviews)</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-[#181410]/75 backdrop-blur px-3 py-2 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /><span>800m · Khandala Station</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 bg-[#181410]/75 backdrop-blur px-3 py-2 rounded-full border border-white/10">
            <span>5 Mins · Kune Waterfalls</span>
          </div>
        </div>

        <div className="animate-fade-up delay-500 flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <Magnetic><button onClick={() => scrollTo('booking-enquiry')} className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] hover:bg-[#D9C29A] text-[#181410] font-bold uppercase tracking-[0.14em] text-xs rounded-sm transition-all duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" /><span>Check Availability — From ₹{HOTEL_INFO.startingPrice.toLocaleString()}/night</span>
            </button></Magnetic>
            <a href="#rooms" onClick={(e) => { e.preventDefault(); scrollTo('rooms'); }} className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold uppercase tracking-wider text-xs rounded-sm border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center">
              Explore Rooms & Suites
            </a>
          </div>
          <p className="text-[11px] text-stone-300">Google live: Cleartrip ₹2,468 · MakeMyTrip ₹2,557 — <button onClick={onOpenBooking} className="text-[#D9C29A] font-bold underline underline-offset-2 hover:text-white">book direct for best rate & priority check-in</button></p>
        </div>

        {/* slideshow dots + caption */}
        <div className="mt-9 flex flex-col items-center gap-2">
          <div className="flex gap-2">
            {HERO_SLIDES.map((s, i) => (
              <button key={s.src} aria-label={s.label} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? 'w-10 bg-[#C5A880]' : 'w-4 bg-white/35 hover:bg-white/60'}`} />
            ))}
          </div>
          <span key={slide} className="text-[11px] uppercase tracking-[0.2em] text-stone-300 animate-fade-up">{HERO_SLIDES[slide].label}</span>
        </div>
      </div>

      <div className="relative z-10 text-center pt-10 hidden md:block">
        <a href="#booking-enquiry" onClick={(e) => { e.preventDefault(); scrollTo('booking-enquiry'); }} className="inline-flex flex-col items-center text-stone-300 hover:text-[#C5A880] transition-colors text-[11px] uppercase tracking-widest">
          <span>Scroll — Your Mountain Story Begins</span>
          <span className="mt-3 block w-px h-12 bg-gradient-to-b from-[#C5A880] to-transparent animate-pulse" /><ChevronDown className="w-4 h-4 mt-1 text-[#C5A880] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
