'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Calendar, ChevronDown, Sparkles, MapPin, Star, ShieldCheck } from 'lucide-react';
import BookingWidget, { BookingDetails } from './BookingWidget';

interface HeroProps {
  onOpenBooking: () => void;
  onSearchBooking: (details: BookingDetails) => void;
}

export default function Hero({ onOpenBooking, onSearchBooking }: HeroProps) {
  const scrollToRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      {/* Background Cinematic Image with High Quality Sahyadri Mist Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Multilayer Luxury Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d0b] via-[#090d0b]/60 to-[#090d0b]/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center my-auto">
        {/* Subtle Luxury Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 bg-stone-900/80 backdrop-blur-md border border-[#C5A880]/40 px-4 py-1.5 rounded-full mb-6 shadow-xl animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#E8DBC5] font-semibold">
            Boutique Comfort in Khandala Hill Station
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
          <span className="text-xs text-amber-200/90 font-medium">B P Road, Opposite Kamat</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] mb-6 drop-shadow-md">
          Where Sahyadri Mist Meets{' '}
          <span className="font-editorial italic font-normal text-[#E8DBC5] block sm:inline">
            Refined Mountain Comfort.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-stone-300 text-base sm:text-lg font-light leading-relaxed mb-8">
          Welcome to <strong className="text-white font-medium">Elite Hotel, Khandala</strong>. Just 90 minutes from Mumbai and Pune, unwind in spacious AC rooms and scenic balcony suites overlooking rolling mountain mist, with authentic on-site dining and effortless access to Kune Falls.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-stone-800">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-white">4.2 / 5</span>
            <span className="text-stone-400">(380+ Verified Reviews)</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-stone-800">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            <span>3 Mins from Khandala Station</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-stone-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>0% Commission Direct Booking</span>
          </div>
        </div>

        {/* Dual Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#C5A880] to-[#ad793a] text-slate-950 font-bold uppercase tracking-wider text-xs rounded shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Reserve Direct for Best Rate</span>
          </button>

          <a
            href="#rooms"
            onClick={scrollToRooms}
            className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium uppercase tracking-wider text-xs rounded border border-white/20 backdrop-blur transition-all flex items-center justify-center"
          >
            <span>Explore Rooms & Suites</span>
          </a>
        </div>
      </div>

      {/* Embedded Floating Interactive Booking Widget */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full -mb-6 sm:-mb-8">
        <BookingWidget onSearch={onSearchBooking} />
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 text-center pt-10 pb-2 hidden lg:block">
        <a
          href="#about"
          className="inline-flex flex-col items-center text-stone-400 hover:text-[#C5A880] transition-colors text-xs uppercase tracking-widest"
        >
          <span>Discover Property</span>
          <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#C5A880]" />
        </a>
      </div>
    </section>
  );
}
