'use client';

import React from 'react';
import { REVIEWS, HOTEL_INFO } from '@/data/hotelData';
import { Star, ShieldCheck, Sparkles, Calendar, MessageCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

interface ReviewsSectionProps {
  onOpenBooking?: () => void;
}

export default function ReviewsSection({ onOpenBooking }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#181410] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Guest Experiences</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Loved by Visiting{' '}
              <span className="font-editorial italic text-[#EFE3CC]">
                Travellers.
              </span>
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              Rated <strong>{HOTEL_INFO.rating} out of 5 stars</strong> by {HOTEL_INFO.reviewCount.toLocaleString()}+ guests on Google. Here is what real guests appreciate about our location, hospitality, and dining.
            </p>
          </div>
        </ScrollReveal>

        {/* Aggregated Rating Trust Card */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-[#241E18] border border-stone-800 rounded-lg p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-lg bg-[#C5A880] text-[#181410] flex flex-col items-center justify-center font-bold">
                <span className="font-display text-2xl leading-none">{HOTEL_INFO.rating}</span>
                <span className="text-[9px] uppercase tracking-wider">/ 5.0</span>
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < 5 ? 'fill-[#C5A880] text-[#C5A880]' : 'text-stone-600'}`}
                    />
                  ))}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  Very Good Guest Rating
                </h3>
                <p className="text-xs text-stone-400">
                  Based on {HOTEL_INFO.reviewCount.toLocaleString()}+ verified guest ratings on Google and major travel platforms
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 text-xs text-stone-300 border-t sm:border-t-0 sm:border-l border-stone-800 pt-3 sm:pt-0 sm:pl-6">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Authentic reviews from verified visitors</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {REVIEWS.map((rev, idx) => (
            <ScrollReveal key={rev.id} delayMs={idx * 100}>
              <div className="bg-[#211B16] p-6 rounded-lg border border-stone-800 flex flex-col justify-between h-full card-lift">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#C5A880] text-[#C5A880]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                      {rev.tripType}
                    </span>
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-white">{rev.author}</h4>
                    <span className="text-[11px] text-stone-400">{rev.location}</span>
                  </div>

                  <span className="text-[10px] text-emerald-400 font-medium">
                    {rev.platform}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Guest-Facing Section: Book Directly. Stay Better. */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto rounded-xl bg-gradient-to-r from-[#234236] via-[#2E4B3E] to-[#234236] border border-[#C5A880]/35 p-7 sm:p-9 text-center space-y-4 shadow-xl">
            <div className="inline-flex items-center space-x-1.5 text-[11px] text-[#C5A880] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Reservation Desk</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Book Directly. Stay Better.
            </h3>

            <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
              Enjoy our best available direct rate, quick confirmation, and personal assistance from the Elite Hotel Khandala front desk.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3 bg-[#C5A880] hover:bg-[#D9C29A] text-[#181410] font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#181410]" />
                <span>Reserve Your Stay</span>
              </button>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(HOTEL_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#241610] border border-stone-700 hover:border-emerald-600/70 text-stone-200 hover:text-emerald-300 font-medium text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Front Desk</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
