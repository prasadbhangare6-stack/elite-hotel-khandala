'use client';

import React from 'react';
import { REVIEWS, HOTEL_INFO } from '@/data/hotelData';
import { Star, ShieldCheck, Sparkles, TrendingUp, DollarSign, Award, ExternalLink } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#101713] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Verified Traveller Feedback</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Loved by Visiting{' '}
            <span className="font-editorial italic font-normal text-[#E8DBC5]">
              Guests.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Rated <strong>4.2 out of 5 stars</strong> across leading travel platforms. Here is what real travellers appreciate about our location, hospitality, and dining.
          </p>
        </div>

        {/* Aggregated Score Bar */}
        <div className="max-w-4xl mx-auto bg-[#18231e] border border-stone-800 rounded-lg p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg bg-[#C5A880] text-stone-950 flex flex-col items-center justify-center font-bold">
              <span className="font-display text-2xl leading-none">4.2</span>
              <span className="text-[10px] uppercase tracking-wider">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'text-stone-600'}`}
                  />
                ))}
              </div>
              <h4 className="text-sm font-semibold text-white">
                Very Good Reputation Across Online Portals
              </h4>
              <p className="text-xs text-stone-400">
                Based on 380+ verified guest ratings on MakeMyTrip, Google, and Booking.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs text-stone-300 border-t sm:border-t-0 sm:border-l border-stone-800 pt-3 sm:pt-0 sm:pl-6">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-white font-medium block">Authentic Feedback Sourced</span>
              <span className="text-stone-400 text-[11px]">
                Transparently gathered from real public guest reviews
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#15201b] p-6 rounded-lg border border-stone-800/80 flex flex-col justify-between hover:border-[#C5A880]/40 transition-colors shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-[#1d2a23] text-stone-300 border border-stone-700/60 px-2 py-0.5 rounded">
                    {rev.tripType}
                  </span>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <h5 className="font-semibold text-white">{rev.author}</h5>
                  <span className="text-[11px] text-stone-400">{rev.location}</span>
                </div>

                <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  {rev.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Value Proposition Box (Direct Acquisition Benefit) */}
        <div className="mt-16 max-w-4xl mx-auto rounded-lg bg-gradient-to-r from-[#17241e] via-[#1b2b24] to-[#17241e] border border-[#C5A880]/30 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Direct Booking Revenue Impact</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Why Elite Hotel Khandala Needs This Direct Platform
            </h3>
            <p className="text-xs text-stone-300 max-w-xl leading-relaxed">
              When travellers discover your hotel on OTAs, up to <strong>18%–22%</strong> of your room price is deducted in commission fees. With this bespoke website and 1-click WhatsApp enquiry channel, you convert high-intent weekend visitors directly into commission-free reservations.
            </p>
          </div>

          <a
            href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
              'Hi Elite Hotel, I am viewing your direct website demo.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#C5A880] text-slate-950 font-bold text-xs uppercase tracking-wider rounded hover:brightness-110 active:scale-95 transition-all shrink-0 shadow-lg"
          >
            Experience Direct Booking
          </a>
        </div>
      </div>
    </section>
  );
}
