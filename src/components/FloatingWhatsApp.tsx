'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
    HOTEL_INFO.whatsappMessage
  )}`;

  return (
    <aside aria-label="Direct contact assistance" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block mr-3 bg-[#111714] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-emerald-500/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        WhatsApp Reception (+91 79720 01916)
      </span>

      {/* Pulsing Outer Ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Direct WhatsApp Enquiry"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping opacity-75" />
        <MessageCircle className="w-7 h-7 text-slate-950 fill-current" />
      </a>
    </aside>
  );
}
