'use client';

import React, { useState } from 'react';
import { ROOMS, RoomCategory, HOTEL_INFO } from '@/data/hotelData';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import RoomModal from './RoomModal';
import ScrollReveal from './ui/ScrollReveal';

interface RoomsSectionProps {
  onSelectRoomBooking: (roomId: string) => void;
}

export default function RoomsSection({ onSelectRoomBooking }: RoomsSectionProps) {
  const [selectedModalRoom, setSelectedModalRoom] = useState<RoomCategory | null>(null);

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Rooms & Balcony Suites</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              Quiet Sanctuaries in the{' '}
              <span className="font-editorial italic text-[#8c5d2e]">
                Hills.
              </span>
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Every room features climate air conditioning, high-speed Wi-Fi, and plush bedding. Select our signature Super Deluxe for a private balcony immersed in Sahyadri mist.
            </p>
          </div>
        </ScrollReveal>

        {/* Visual Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOMS.map((room, idx) => (
            <ScrollReveal key={room.id} delayMs={idx * 120}>
              <div
                className={`bg-white rounded-lg overflow-hidden border card-lift flex flex-col justify-between h-full ${
                  room.featured
                    ? 'border-[#C5A880]/80 shadow-[0_10px_30px_rgba(197,168,128,0.18)] ring-1 ring-[#C5A880]/40'
                    : 'border-stone-200/90 shadow-sm hover:border-stone-300'
                }`}
              >
                {/* Visual Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img
                    src={room.heroImage}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Tasteful Most Popular Badge */}
                  {room.featured && (
                    <div className="absolute top-3 left-3 bg-[#0E1411]/90 backdrop-blur text-[#E8DBC5] border border-[#C5A880]/50 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded shadow-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 text-white text-xs font-light">
                    {room.view}
                  </div>
                </div>

                {/* Scannable Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-stone-900">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {room.shortBenefit}
                    </p>
                  </div>

                  {/* 3 Key Details Strip */}
                  <div className="py-2.5 border-y border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
                    <span>{room.keyDetails[0]}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span>{room.keyDetails[1]}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span className="text-[#8c5d2e]">{room.keyDetails[2]}</span>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-1 space-y-2.5">
                    <button
                      onClick={() => onSelectRoomBooking(room.id)}
                      className="w-full py-2.5 px-4 bg-[#0E1411] hover:bg-[#8c5d2e] text-white font-semibold text-xs rounded uppercase tracking-wider transition-colors duration-200 flex items-center justify-center space-x-1.5 group/btn"
                    >
                      <span>Check Availability</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <button
                        onClick={() => setSelectedModalRoom(room)}
                        className="text-stone-600 hover:text-[#8c5d2e] font-medium underline underline-offset-4 transition-colors"
                      >
                        View Room Details
                      </button>

                      <a
                        href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                          `Hello Elite Hotel Khandala, I would like to inquire about availability for ${room.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-[11px] text-emerald-700 hover:text-emerald-800 font-medium"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>Inquire via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Render Room Detail Modal */}
      {selectedModalRoom && (
        <RoomModal
          room={selectedModalRoom}
          onClose={() => setSelectedModalRoom(null)}
          onSelectBooking={(roomId) => {
            setSelectedModalRoom(null);
            onSelectRoomBooking(roomId);
          }}
        />
      )}
    </section>
  );
}
