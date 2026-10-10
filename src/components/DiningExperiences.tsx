'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Utensils, Coffee, Wine, Sparkles, Compass, Sun, Droplets, ArrowRight } from 'lucide-react';

interface DiningExperiencesProps {
  onOpenBooking: () => void;
}

export default function DiningExperiences({ onOpenBooking }: DiningExperiencesProps) {
  return (
    <section id="dining" className="py-24 sm:py-32 bg-[#121a16] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Flavours & Moments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Dining & Khandala{' '}
            <span className="font-editorial italic font-normal text-[#E8DBC5]">
              Experiences.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            From hot piping Maharashtrian breakfast delicacies to evening drinks at our on-site bar, enjoy wholesome hospitality after a day exploring the Sahyadri mountains.
          </p>
        </div>

        {/* Feature Split 1: In-House Dining */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          <div className="lg:col-span-7 rounded-lg overflow-hidden border border-stone-800 shadow-2xl relative aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Elite Hotel Restaurant and dining ambience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  On-Site Restaurant & Bar
                </span>
                <p className="font-serif text-lg text-white">Comfort Food Crafted for Travellers</p>
              </div>
              <span className="bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-amber-200 border border-amber-500/30">
                Vegetarian & Non-Veg
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="w-12 h-12 rounded-lg bg-[#1a2520] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
              <Utensils className="w-6 h-6" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              The Multi-Cuisine Restaurant
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed">
              Our on-site restaurant is praised by visiting families and road-trippers for hearty, hygienic, and authentic dishes. Enjoy hot breakfast favourites like Misal Pav, Poha, fresh parathas, and South Indian fare, alongside a rich multi-cuisine lunch and dinner menu.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs text-stone-200">
                <Coffee className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Morning Breakfast & High Tea:</strong> Hot spiced ginger chai and fresh morning spreads to fuel your hill excursions.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs text-stone-200">
                <Wine className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Evening Refreshments & Bar:</strong> Unwind with your favourite beverages and appetizers after a scenic drive.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs text-stone-200">
                <Utensils className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">In-Room Dining:</strong> Freshly prepared hot meals served straight to your room or private balcony.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Split 2: Sahyadri Curated Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-[#18221d] p-6 rounded-lg border border-stone-800 space-y-4 hover:border-[#C5A880]/50 transition-colors">
            <div className="w-10 h-10 rounded bg-[#202d27] flex items-center justify-center text-[#C5A880]">
              <Droplets className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg font-bold text-white">Monsoon Waterfall Excursions</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Khandala comes alive during monsoon with cascading torrents. Kune Falls is just 5 minutes away, and Bhushi Dam is easily reachable in 18 minutes.
            </p>
          </div>

          <div className="bg-[#18221d] p-6 rounded-lg border border-stone-800 space-y-4 hover:border-[#C5A880]/50 transition-colors">
            <div className="w-10 h-10 rounded bg-[#202d27] flex items-center justify-center text-[#C5A880]">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg font-bold text-white">Duke’s Nose Sunset Trek</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Only 4.2 km from the hotel, hike to Nagphani (Duke’s Nose) for exhilarating 360-degree vistas across the valleys as dusk settles over Khandala.
            </p>
          </div>

          <div className="bg-[#18221d] p-6 rounded-lg border border-stone-800 space-y-4 hover:border-[#C5A880]/50 transition-colors">
            <div className="w-10 h-10 rounded bg-[#202d27] flex items-center justify-center text-[#C5A880]">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg font-bold text-white">Heritage & Cave Trails</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Visit Karla and Bhaja caves carved into sheer basalt rock in the 2nd century BC, or explore the ruins and ramparts of Rajmachi Fort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
