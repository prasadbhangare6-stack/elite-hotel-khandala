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

export default function AmenitiesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#8c5d2e]" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#8c5d2e]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#8c5d2e]" />;
      case 'Mountain':
        return <Mountain className="w-6 h-6 text-[#8c5d2e]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#8c5d2e]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#8c5d2e]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#8c5d2e]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#8c5d2e]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#8c5d2e]" />;
    }
  };

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8c5d2e]" />
            <span>Verified Facilities & Comforts</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Thoughtfully Curated for a{' '}
            <span className="font-editorial italic font-normal text-[#8c5d2e]">
              Seamless Stay.
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Every verified convenience at Elite Hotel Khandala is designed to make your weekend retreat effortless, from ample on-site car parking to round-the-clock power and delicious in-house dining.
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white p-6 rounded-lg border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-stone-200 flex items-center justify-center mb-5 group-hover:bg-[#f6f0df] transition-colors">
                  {getIcon(amenity.icon)}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-base font-bold text-stone-900">
                    {amenity.name}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center space-x-1 text-[11px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Property Amenity</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Verified Real Facilities Guarantee */}
        <div className="mt-14 max-w-4xl mx-auto bg-stone-900 text-white rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg font-bold text-white">
              Planning a group stay or special family celebration?
            </h4>
            <p className="text-xs text-stone-300">
              Speak directly with our Khandala property manager for customized meal plans and block reservations.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-[#C5A880] text-stone-950 font-bold text-xs uppercase tracking-wider rounded hover:brightness-110 active:scale-95 transition-all shrink-0"
          >
            Contact Reservation Desk
          </a>
        </div>
      </div>
    </section>
  );
}
