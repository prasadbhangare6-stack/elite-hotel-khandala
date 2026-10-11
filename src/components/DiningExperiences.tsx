'use client';

import React from 'react';
import { Utensils, Coffee, Wine, Sparkles, Compass, Sun, Droplets } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

interface DiningExperiencesProps {
  onOpenBooking: () => void;
}

export default function DiningExperiences({ onOpenBooking }: DiningExperiencesProps) {
  return (
    <section id="dining" className="py-24 sm:py-32 bg-[#0E1411] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Flavours & Sights</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Dining & Khandala{' '}
              <span className="font-editorial italic text-[#E8DBC5]">
                Experiences.
              </span>
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              Wholesome hot meals prepared on property, paired with the natural wonders and viewpoints of the Western Ghats.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Split: In-House Dining */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 bg-[#131C17] rounded-xl border border-stone-800 p-6 sm:p-8">
            <div className="lg:col-span-7 rounded-lg overflow-hidden border border-stone-800/80 aspect-[16/10] relative group">
              <img
                src="/images/hotel/restaurant.jpg"
                alt="Elite Hotel Restaurant and dining ambience with Sahyadri valley views"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="text-[#E8DBC5] font-serif text-base">In-House Multi-Cuisine Restaurant</span>
                <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded text-[11px] text-stone-300">
                  Veg & Non-Veg
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="w-10 h-10 rounded bg-[#1C2A22] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                <Utensils className="w-5 h-5" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                Fresh, Comforting Meals
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Enjoy hot, freshly prepared Maharashtrian specialties, North Indian curries, and regional breakfast favourites without stepping out into traffic. Room service is also available for relaxed dining in your room or on your balcony.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-stone-300">
                <div className="flex items-center space-x-2.5">
                  <Coffee className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Morning Breakfast & Spiced Ginger Chai</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Wine className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Evening Refreshments & Bar Service</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Utensils className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>In-Room Dining Delivered to Your Door</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Experiences Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delayMs={100}>
            <div className="bg-[#131C17] p-6 rounded-lg border border-stone-800 space-y-3 card-lift h-full">
              <div className="w-9 h-9 rounded bg-[#1A2620] flex items-center justify-center text-[#C5A880]">
                <Droplets className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-bold text-white">Kune Falls & Waterfalls</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                India’s 14th highest waterfall is just a 5-minute drive from Elite Hotel, making morning and monsoon visits effortless.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <div className="bg-[#131C17] p-6 rounded-lg border border-stone-800 space-y-3 card-lift h-full">
              <div className="w-9 h-9 rounded bg-[#1A2620] flex items-center justify-center text-[#C5A880]">
                <Sun className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-bold text-white">Duke’s Nose Sunset Trek</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Hike up Nagphani cliff (4.2 km away) for exhilarating sunset panoramas across the rolling valley as cool breezes set in.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="bg-[#131C17] p-6 rounded-lg border border-stone-800 space-y-3 card-lift h-full">
              <div className="w-9 h-9 rounded bg-[#1A2620] flex items-center justify-center text-[#C5A880]">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-bold text-white">Ancient Cave Heritage</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Explore Karla and Bhaja caves carved into basalt rock in the 2nd century BC, or wander the ramparts of Rajmachi Fort.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
