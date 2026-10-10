'use client';

import React, { useState } from 'react';
import { ROOMS, RoomCategory, HOTEL_INFO } from '@/data/hotelData';
import { Maximize2, Users, Bed, Eye, ArrowRight, Sparkles, MessageCircle, Info } from 'lucide-react';
import RoomModal from './RoomModal';

interface RoomsSectionProps {
  onSelectRoomBooking: (roomId: string) => void;
}

export default function RoomsSection({ onSelectRoomBooking }: RoomsSectionProps) {
  const [selectedModalRoom, setSelectedModalRoom] = useState<RoomCategory | null>(null);

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#111714] text-white relative">
      {/* Decorative luxury gradient backdrop */}
      <div className="absolute inset-0 bg-radial-gradient from-[#18231e]/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-stone-800 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Khandala Accommodations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Stay in Serenity.{' '}
              <span className="font-editorial italic font-normal text-[#E8DBC5]">
                Rooms & Balcony Suites.
              </span>
            </h2>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              Every accommodation at Elite Hotel features individually controlled air conditioning, high-speed Wi-Fi, and plush bedding. Select our signature Super Deluxe category for a private balcony immersed in Sahyadri mountain mist, or the Suite for a private soaking tub.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end text-xs text-stone-400 space-y-1">
            <span className="inline-flex items-center space-x-1.5 text-amber-300 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded">
              <Info className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>*Demo notice: rates shown are illustrative for demonstration</span>
            </span>
            <span className="text-[11px] text-stone-500">
              Check-in 12:00 PM • Check-out 10:00 AM • Govt ID Required
            </span>
          </div>
        </div>

        {/* Room Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className={`flex flex-col rounded-lg overflow-hidden bg-[#16201b] border transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                room.featured
                  ? 'border-[#C5A880] shadow-[0_10px_35px_-10px_rgba(197,168,128,0.25)] ring-1 ring-[#C5A880]/50'
                  : 'border-stone-800/80 hover:border-stone-700'
              }`}
            >
              {/* Room Hero Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src={room.heroImage}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16201b] via-transparent to-black/30" />

                {/* Featured Badge */}
                {room.featured && (
                  <div className="absolute top-3 left-3 bg-[#C5A880] text-stone-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-stone-950" />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* View Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-2.5 py-1 rounded text-[11px] text-[#E8DBC5]">
                  {room.view}
                </div>
              </div>

              {/* Room Details & Specs */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#C5A880] transition-colors">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 mb-4 line-clamp-2">{room.subtitle}</p>

                  {/* Specs Quick Matrix */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-800/80 text-[11px] text-stone-300">
                    <div className="flex items-center space-x-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{room.occupancy.split(' ')[0]} Max</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>King Bed</span>
                    </div>
                  </div>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {room.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#1d2b24] text-stone-300 border border-stone-700/60 px-2 py-0.5 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-4 border-t border-stone-800/80 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                        Illustrative Rate
                      </span>
                      <div className="flex items-baseline space-x-1">
                        <span className="font-display text-2xl font-bold text-white">
                          ₹{room.pricePerNight.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-stone-400">/ night</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedModalRoom(room)}
                      className="text-xs text-[#C5A880] hover:text-[#E8DBC5] font-semibold underline underline-offset-4 flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Action Dual Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectRoomBooking(room.id)}
                      className="w-full py-2.5 bg-gradient-to-r from-[#C5A880] to-[#ad793a] text-slate-950 font-bold text-xs rounded uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all text-center shadow"
                    >
                      Enquire Direct
                    </button>

                    <a
                      href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hi Elite Hotel Khandala, I would like to enquire about ${room.name} rates.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-emerald-950/60 border border-emerald-600/50 hover:bg-emerald-900/60 text-emerald-300 font-semibold text-xs rounded uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
