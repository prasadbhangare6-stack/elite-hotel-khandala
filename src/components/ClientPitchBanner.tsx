'use client';

import React, { useState } from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Presentation, ChevronDown, ChevronUp, DollarSign, MessageCircle, TrendingUp, Check, X } from 'lucide-react';

export default function ClientPitchBanner() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Client acquisition pitch deck" className="fixed bottom-6 left-6 z-40 max-w-md hidden md:block">
      {isExpanded ? (
        <div className="bg-[#111714] text-white border border-[#C5A880] rounded-lg shadow-2xl p-5 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center space-x-2">
              <Presentation className="w-5 h-5 text-[#C5A880]" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold block">
                  Client Pitch Mode
                </span>
                <h4 className="font-display text-sm font-bold text-white">
                  Why Elite Hotel Needs This Website
                </h4>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 text-stone-400 hover:text-white"
                title="Minimize pitch notes"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-stone-400 hover:text-rose-400"
                title="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-stone-300">
            <div className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Save 18%–22% OTA Commissions:</strong> Direct bookings retain 100% of room revenue instead of paying aggregator commissions.
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Instant WhatsApp Bookings:</strong> Most Indian weekend travellers prefer messaging hotel front desk directly.
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Sahyadri Valley Visual Branding:</strong> Puts the spotlight on your scenic balconies and proximity to Kune Falls.
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Own Guest Database:</strong> Re-market to past Mumbai & Pune guests for monsoon and Diwali weekends.
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
            <span>Prepared for hotel owner review</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#C5A880] hover:underline font-semibold"
            >
              Minimize
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-[#16201b]/95 backdrop-blur-md text-white border border-[#C5A880]/50 hover:border-[#C5A880] px-4 py-2.5 rounded-full shadow-2xl flex items-center space-x-2.5 text-xs font-semibold hover:bg-[#1f2c25] transition-all"
        >
          <Presentation className="w-4 h-4 text-[#C5A880]" />
          <span>Pitch Guide: Direct Booking ROI</span>
          <ChevronUp className="w-3.5 h-3.5 text-stone-400" />
        </button>
      )}
    </aside>
  );
}
