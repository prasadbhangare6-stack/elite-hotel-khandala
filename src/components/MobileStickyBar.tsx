'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
    HOTEL_INFO.whatsappMessage
  )}`;

  return (
    <aside aria-label="Quick booking actions" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0E1411]/95 backdrop-blur-lg border-t border-[#24332B] px-3 py-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
      <div className="grid grid-cols-12 gap-2 items-center max-w-md mx-auto">
        {/* Quick Call Button */}
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="col-span-3 flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-stone-300 hover:text-white bg-[#16201b] border border-stone-800 text-[10px] font-medium active:scale-95 transition-transform"
          aria-label="Call Reception"
        >
          <Phone className="w-4 h-4 text-[#C5A880] mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-emerald-300 hover:text-emerald-200 bg-[#14261d] border border-emerald-700/50 text-[10px] font-medium active:scale-95 transition-transform"
          aria-label="WhatsApp Message"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Check Availability Primary CTA */}
        <button
          onClick={onOpenBooking}
          className="col-span-6 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-md bg-[#C5A880] hover:bg-[#d5b992] text-[#0E1411] font-semibold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
        >
          <Calendar className="w-3.5 h-3.5 text-[#0E1411]" />
          <span>Check Dates</span>
        </button>
      </div>
    </aside>
  );
}
