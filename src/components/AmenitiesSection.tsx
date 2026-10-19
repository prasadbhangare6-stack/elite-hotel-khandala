'use client';

import React from 'react';
import { AMENITIES } from '@/data/hotelData';
import {
  Wifi,
  Wind,
  UtensilsCrossed,
  Mountain,
  Car,
  Clock,
  Smile,
  Zap,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function AmenitiesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-[#96754A]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#96754A]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#96754A]" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-[#96754A]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#96754A]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#96754A]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#96754A]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#96754A]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#96754A]" />;
    }
  };

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-[#F3E9D7] text-stone-900 border-t border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#96754A] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Thoughtful Hospitality</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              Essential Comforts for a{' '}
              <span className="font-editorial italic text-[#96754A]">
                Relaxing Stay.
              </span>
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              From secure on-site parking to uninterrupted generator backup and warm front-desk assistance, we attend to the details that make your hill getaway effortless.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial amenity index — numbered, hairline rules, no generic card grid */}
        <div className="max-w-5xl mx-auto border-t border-stone-900/10">
          {AMENITIES.map((amenity, idx) => (
            <ScrollReveal key={amenity.id} variant={idx % 2 ? 'slide-left' : 'fade-up'} delayMs={Math.min(idx,3) * 70}>
              <div className="group grid grid-cols-[auto_1fr] sm:grid-cols-[64px_48px_1fr_auto] items-center gap-4 sm:gap-6 py-6 border-b border-stone-900/10 hover:bg-white/50 px-2 sm:px-4 transition-colors duration-300">
                <span className="font-editorial italic text-[#C5A880] text-xl w-10">0{idx + 1}</span>
                <span className="hidden sm:flex w-11 h-11 items-center justify-center border border-stone-900/15 bg-[#FBF6EC] group-hover:border-[#C5A880] group-hover:text-[#96754A] transition-colors">{getIcon(amenity.icon)}</span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-normal text-stone-900">{amenity.name}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mt-0.5 max-w-xl">{amenity.description}</p>
                </div>
                <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-stone-400 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-emerald-700" /> At the property</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
