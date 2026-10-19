'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { useParallax } from '@/hooks/useParallax';
import { ShieldCheck, Mountain, Utensils, Train, CheckCircle2, ArrowRight } from 'lucide-react';

interface PropertyIntroProps {
  onOpenBooking: () => void;
}

export default function PropertyIntro({ onOpenBooking }: PropertyIntroProps) {
  const slowRef = useParallax<HTMLDivElement>(0.10, 42, 1);
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FBF6EC] text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Layered Frames */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-stone-200 aspect-[4/3]">
                <img
                  src="/images/hotel/balcony-mist.jpg"
                  alt="Elite Hotel Khandala private balcony overlooking Sahyadri valley mist"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#EFE3CC] font-semibold">
                    Khandala Hill Station
                  </span>
                  <p className="font-serif text-lg font-medium">Boutique Sahyadri Getaway</p>
                </div>
              </div>

              {/* Secondary Overlapping Inset Card — faster parallax layer (depth) */}
              <div ref={slowRef} className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-3/5 sm:w-1/2 rounded-lg overflow-hidden shadow-2xl border-4 border-[#FBF6EC] bg-[#181410] text-white p-5 will-change-transform">
                <div className="flex items-center space-x-2 text-[#C5A880] mb-2">
                  <Mountain className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Serene Location</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Situated right on B P Road opposite Kamat Hotel, minutes from Kune Falls and Khandala Station.
                </p>
                <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-[#C5A880]">
                  <span>{HOTEL_INFO.rating} ★ · {HOTEL_INFO.reviewCount.toLocaleString()}+ Reviews</span>
                  <span>100% Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Property Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#96754A]">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span>About Elite Hotel Khandala</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              An Easy, Scenic Escape to the{' '}
              <span className="font-editorial italic font-normal text-[#96754A]">
                Western Ghats.
              </span>
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Nestled along B P Road in tranquil Khandala, <strong>Elite Hotel</strong> is thoughtfully created for city dwellers from Mumbai and Pune yearning for refreshing monsoon mist, crisp mountain breezes, and unhurried hospitality without long travel hassles.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              Whether you are planning a romantic weekend in our <strong>Balcony Super Deluxe Rooms</strong>, taking a family break in our expansive <strong>Suite with Bathtub</strong>, or looking for a comfortable halt after trekking Duke’s Nose and visiting Kune Falls, our team is committed to providing warm hospitality, clean rooms, and hot in-house dining.
            </p>

            {/* Key Verified Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-3 bg-white p-3.5 rounded border border-stone-200/80 shadow-sm">
                <Train className="w-5 h-5 text-[#96754A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">800m to Khandala Station</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Effortless 3-min rail and auto connectivity</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-3.5 rounded border border-stone-200/80 shadow-sm">
                <Utensils className="w-5 h-5 text-[#96754A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">In-House Restaurant & Bar</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Authentic hot Maharashtrian & North Indian food</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-3.5 rounded border border-stone-200/80 shadow-sm">
                <Mountain className="w-5 h-5 text-[#96754A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Scenic Private Balconies</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Wake up to Sahyadri clouds and mountain breeze</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-3.5 rounded border border-stone-200/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#96754A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Complimentary On-Site Parking</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Direct highway access on B P Road</p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#181410] text-white hover:bg-[#96754A] font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-2"
              >
                <span>Plan Your Stay With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#rooms"
                className="text-xs font-semibold uppercase tracking-wider text-stone-800 hover:text-[#96754A] transition-colors underline underline-offset-4"
              >
                View Available Room Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
