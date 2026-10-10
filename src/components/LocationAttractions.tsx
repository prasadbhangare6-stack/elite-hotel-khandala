'use client';

import React from 'react';
import { HOTEL_INFO, ATTRACTIONS } from '@/data/hotelData';
import { MapPin, Navigation, Car, Clock, Sparkles, ExternalLink, Compass } from 'lucide-react';

export default function LocationAttractions() {
  return (
    <section id="attractions" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8c5d2e]" />
            <span>Prime Khandala Setting</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Explore the Heart of the{' '}
            <span className="font-editorial italic font-normal text-[#8c5d2e]">
              Sahyadris.
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Strategically located on B P Road opposite Kamat Hotel in Khandala. Enjoy seamless connectivity to the Mumbai-Pune Expressway, rail station, and top tourist viewpoints.
          </p>
        </div>

        {/* Location & Map Hero Feature Banner */}
        <div className="rounded-xl overflow-hidden bg-white border border-stone-200 shadow-xl mb-16 grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Location Specs & Transit Times */}
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>Verified Property Address</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                CTS 295, Plot No. 2, B P Road, Khandala
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Opposite Kamat Hotel, Kune Village, Khandala, Lonavala, Maharashtra - 410301. Perfectly positioned for road travelers avoiding Lonavala market congestion.
              </p>

              {/* Transit Breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-stone-50 p-3 rounded border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">From Mumbai</span>
                  <strong className="text-stone-900 text-sm">~80 km</strong>
                  <span className="text-stone-500 block text-[11px]">1.5 - 2 hrs via Expressway</span>
                </div>

                <div className="bg-stone-50 p-3 rounded border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">From Pune</span>
                  <strong className="text-stone-900 text-sm">~68 km</strong>
                  <span className="text-stone-500 block text-[11px]">1 - 1.5 hrs via Expressway</span>
                </div>

                <div className="bg-stone-50 p-3 rounded border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Khandala Station</span>
                  <strong className="text-stone-900 text-sm">800 meters</strong>
                  <span className="text-stone-500 block text-[11px]">3 mins auto ride</span>
                </div>

                <div className="bg-stone-50 p-3 rounded border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Expressway Exit</span>
                  <strong className="text-stone-900 text-sm">2 mins away</strong>
                  <span className="text-stone-500 block text-[11px]">Zero hill driving stress</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#111714] text-white hover:bg-[#8c5d2e] font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-2 shadow"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="text-xs font-semibold text-stone-700 hover:text-[#8c5d2e] transition-colors"
              >
                Call for Driving Directions: {HOTEL_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right: Map Visual Mockup */}
          <div className="lg:col-span-6 bg-stone-900 relative min-h-[300px] lg:min-h-full overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
              alt="Khandala map preview"
              className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Simulated Pin */}
            <div className="absolute z-10 text-center p-6 bg-black/80 backdrop-blur-md rounded-lg border border-[#C5A880]/50 max-w-xs shadow-2xl">
              <div className="w-10 h-10 rounded-full bg-[#C5A880] text-stone-950 flex items-center justify-center mx-auto mb-2 shadow-lg animate-pulse">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-white">Elite Hotel Khandala</h4>
              <p className="text-xs text-stone-300 mt-1">Opposite Kamat Hotel, B P Road</p>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center space-x-1.5 text-[11px] font-semibold text-amber-300 hover:text-white"
              >
                <span>Navigate via GPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Nearby Attractions Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold text-stone-900">
              Verified Nearby Attractions
            </h3>
            <span className="text-xs text-stone-500 font-medium">
              Verified travel times from Elite Hotel
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATTRACTIONS.map((attraction, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#E8DBC5]">
                    {attraction.type}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#111714]/90 backdrop-blur px-2.5 py-1 rounded text-xs text-white font-semibold flex items-center space-x-1 border border-stone-700">
                    <Clock className="w-3 h-3 text-[#C5A880]" />
                    <span>{attraction.driveTime}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h4 className="font-display text-base font-bold text-stone-900 group-hover:text-[#8c5d2e] transition-colors">
                        {attraction.name}
                      </h4>
                      <span className="text-xs font-semibold text-[#8c5d2e] shrink-0 ml-2">
                        {attraction.distance}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span>Ask concierge for auto/cab</span>
                    <Compass className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
