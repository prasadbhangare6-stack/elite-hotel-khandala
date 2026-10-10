'use client';

import React from 'react';
import { HOTEL_INFO, ATTRACTIONS } from '@/data/hotelData';
import { MapPin, Navigation, Clock, Sparkles, ExternalLink } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function LocationAttractions() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Location & Sights</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              In the Heart of{' '}
              <span className="font-editorial italic text-[#8c5d2e]">
                Khandala.
              </span>
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Situated right on B P Road opposite Kamat Hotel. Effortless access from the Mumbai-Pune Expressway without town market delays.
            </p>
          </div>
        </ScrollReveal>

        {/* Location & Map Hero Feature Banner */}
        <ScrollReveal>
          <div className="rounded-xl overflow-hidden bg-white border border-stone-200/90 shadow-md mb-16 grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Location Specs */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Property Address</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                  CTS 295, Plot No. 2, B P Road
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Opposite Kamat Hotel, Kune Village, Khandala, Lonavala, Maharashtra - 410301. Conveniently located for travellers arriving via road or rail.
                </p>

                {/* Transit Breakdown */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-[#FAF8F5] p-3 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">Khandala Station</span>
                    <strong className="text-stone-900 text-sm font-semibold">800 meters</strong>
                    <span className="text-stone-500 block text-[11px]">3 mins drive / 10 mins walk</span>
                  </div>

                  <div className="bg-[#FAF8F5] p-3 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">Expressway Exit</span>
                    <strong className="text-stone-900 text-sm font-semibold">2 mins away</strong>
                    <span className="text-stone-500 block text-[11px]">Quick Mumbai/Pune arrival</span>
                  </div>

                  <div className="bg-[#FAF8F5] p-3 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">From Mumbai</span>
                    <strong className="text-stone-900 text-sm font-semibold">~80 km</strong>
                    <span className="text-stone-500 block text-[11px]">90 mins via Expressway</span>
                  </div>

                  <div className="bg-[#FAF8F5] p-3 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">From Pune</span>
                    <strong className="text-stone-900 text-sm font-semibold">~68 km</strong>
                    <span className="text-stone-500 block text-[11px]">75 mins via Expressway</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#0E1411] hover:bg-[#8c5d2e] text-white font-medium text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="text-xs font-semibold text-stone-700 hover:text-[#8c5d2e] transition-colors"
                >
                  Call for Driving Guidance: {HOTEL_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right: Map Graphic / Sights Preview */}
            <div className="lg:col-span-6 bg-[#0E1411] relative min-h-[280px] lg:min-h-full overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                alt="Khandala map location"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute z-10 text-center p-6 bg-[#0E1411]/90 backdrop-blur-md rounded-lg border border-[#C5A880]/30 max-w-xs shadow-xl">
                <div className="w-9 h-9 rounded-full bg-[#C5A880] text-[#0E1411] flex items-center justify-center mx-auto mb-2 shadow">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Elite Hotel Khandala</h4>
                <p className="text-xs text-stone-300 mt-1">Opposite Kamat Hotel, B P Road</p>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center space-x-1 text-[11px] font-semibold text-[#E8DBC5] hover:underline"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Nearby Attractions Cards */}
        <div>
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-2xl font-bold text-stone-900">
                Nearby Attractions
              </h3>
              <span className="text-xs text-stone-500">
                Verified travel times from the hotel
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATTRACTIONS.map((attraction, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 70}>
                <div className="bg-white rounded-lg overflow-hidden border border-stone-200/90 shadow-xs card-lift h-full flex flex-col justify-between">
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0E1411]/85 backdrop-blur px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-[#E8DBC5]">
                      {attraction.type}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#0E1411]/90 backdrop-blur px-2.5 py-1 rounded text-xs text-white font-medium flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>{attraction.driveTime}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5">
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="font-display text-base font-bold text-stone-900">
                          {attraction.name}
                        </h4>
                        <span className="text-xs font-medium text-[#8c5d2e] shrink-0 ml-2">
                          {attraction.distance}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                      Auto-rickshaw and local cab arrangements available at reception
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
