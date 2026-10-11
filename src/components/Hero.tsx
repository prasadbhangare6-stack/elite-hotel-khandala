'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Calendar, ChevronDown, MapPin, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking-enquiry');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking();
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Cinematic Background Image with Ultra-Subtle Slow Drift */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center animate-hero-drift"
          style={{
            backgroundImage: `url('/images/hotel/exterior.jpg')`,
          }}
        />
        {/* Mountain Luxury Gradient Overlays */}
        <div className="absolute inset-0 luxury-hero-overlay" />
      </div>

      {/* Main Content with Staggered Fade-Up Sequence */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow (Delay 100ms) */}
        <div className="animate-fade-up opacity-0 delay-100 inline-flex items-center space-x-2 bg-[#0E1411]/80 backdrop-blur-md border border-[#C5A880]/30 px-3.5 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8DBC5] font-medium">
            Boutique Sanctuary in Khandala
          </span>
        </div>

        {/* Heading (Delay 200ms) */}
        <h1 className="animate-fade-up opacity-0 delay-200 font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12] mb-6 max-w-4xl">
          Where Sahyadri Mist Meets{' '}
          <span className="font-editorial italic text-[#E8DBC5]">
            Refined Mountain Comfort.
          </span>
        </h1>

        {/* Short, Refined Value Proposition (Delay 300ms) */}
        <p className="animate-fade-up opacity-0 delay-300 max-w-2xl text-stone-300 text-sm sm:text-base font-light leading-relaxed mb-8">
          Escape city bustle for tranquil mountain air. Unwind in spacious AC rooms and scenic balcony suites overlooking rolling valley mist, with hot in-house dining and easy access to Kune Falls.
        </p>

        {/* Rating & Location Trust Indicators (Delay 400ms) */}
        <div className="animate-fade-up opacity-0 delay-400 flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-9 text-xs text-stone-300">
          <div className="flex items-center space-x-1.5 bg-[#0E1411]/70 backdrop-blur px-3 py-1.5 rounded-full border border-stone-800">
            <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
            <span className="font-medium text-white">{HOTEL_INFO.rating} / 5</span>
            <span className="text-stone-400">({HOTEL_INFO.reviewCount.toLocaleString()}+ Verified Reviews)</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-[#0E1411]/70 backdrop-blur px-3 py-1.5 rounded-full border border-stone-800">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>800m from Khandala Railway Station</span>
          </div>

          <div className="hidden sm:flex items-center space-x-1.5 bg-[#0E1411]/70 backdrop-blur px-3 py-1.5 rounded-full border border-stone-800">
            <span>5 Mins to Kune Waterfalls</span>
          </div>
        </div>

        {/* Primary Booking CTAs (Delay 500ms) */}
        <div className="animate-fade-up opacity-0 delay-500 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#C5A880] hover:bg-[#d5b992] text-[#0E1411] font-semibold uppercase tracking-wider text-xs rounded transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4 text-[#0E1411]" />
            <span>Check Availability</span>
          </button>

          <a
            href="#rooms"
            onClick={scrollToRooms}
            className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium uppercase tracking-wider text-xs rounded border border-white/20 backdrop-blur transition-all flex items-center justify-center"
          >
            <span>Explore Rooms & Suites</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="relative z-10 text-center pt-12 hidden md:block">
        <a
          href="#booking-enquiry"
          className="inline-flex flex-col items-center text-stone-400 hover:text-[#C5A880] transition-colors text-[11px] uppercase tracking-widest"
        >
          <span>Plan Your Stay</span>
          <ChevronDown className="w-3.5 h-3.5 mt-1 text-[#C5A880] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
