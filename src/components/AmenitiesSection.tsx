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
        return <Wifi className="w-5 h-5 text-[#8c5d2e]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#8c5d2e]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#8c5d2e]" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-[#8c5d2e]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#8c5d2e]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#8c5d2e]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#8c5d2e]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#8c5d2e]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#8c5d2e]" />;
    }
  };

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Thoughtful Hospitality</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              Essential Comforts for a{' '}
              <span className="font-editorial italic text-[#8c5d2e]">
                Relaxing Stay.
              </span>
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              From secure on-site parking to uninterrupted generator backup and warm front-desk assistance, we attend to the details that make your hill getaway effortless.
            </p>
          </div>
        </ScrollReveal>

        {/* Amenities Cards Grid with Hover Lift & Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, idx) => (
            <ScrollReveal key={amenity.id} delayMs={idx * 60}>
              <div className="bg-[#FAF8F5] p-6 rounded-lg border border-stone-200/80 card-lift h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-md bg-white border border-stone-200 flex items-center justify-center mb-4 shadow-2xs">
                    {getIcon(amenity.icon)}
                  </div>

                  <h3 className="font-display text-base font-bold text-stone-900 mb-2">
                    {amenity.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center space-x-1.5 text-[11px] text-stone-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Property Amenity</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
