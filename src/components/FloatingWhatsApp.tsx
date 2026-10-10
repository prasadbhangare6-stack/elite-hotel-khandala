'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
    HOTEL_INFO.whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Direct contact assistance"
      className="fixed bottom-20 md:bottom-6 right-5 md:right-6 z-40 hidden sm:flex items-center group"
    >
      {/* Tooltip Label */}
      <span className="hidden lg:inline-block mr-2.5 bg-[#0E1411] text-stone-200 text-xs font-medium px-3 py-1.5 rounded-full border border-stone-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Front Desk WhatsApp
      </span>

      {/* Button with Subtle Pulse */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400/30"
        aria-label="Direct WhatsApp Enquiry"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping opacity-60" />
        <MessageCircle className="w-5 h-5 text-slate-950 fill-current" />
      </a>
    </aside>
  );
}
