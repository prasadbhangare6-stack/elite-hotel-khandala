'use client';

import React, { useState } from 'react';
import { RoomCategory, HOTEL_INFO } from '@/data/hotelData';
import { X, Check, Users, Maximize2, Bed, Eye, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

interface RoomModalProps {
  room: RoomCategory | null;
  onClose: () => void;
  onSelectBooking: (roomId: string) => void;
}

export default function RoomModal({ room, onClose, onSelectBooking }: RoomModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const roomImages = room.galleryImages.length > 0 ? room.galleryImages : [room.heroImage];

  const whatsappRoomMessage = `Hello Elite Hotel Khandala, I am interested in checking availability and direct booking rates for the ${room.name}.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#111714] text-white rounded-lg border border-[#C5A880]/30 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#161f1b]">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
              Elite Hotel Khandala • Accommodation Details
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{room.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Main Photo Gallery Preview */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden border border-stone-800 shadow-lg bg-stone-900">
              <img
                src={roomImages[activeImageIndex]}
                alt={`${room.name} view`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs text-[#E8DBC5]">
                {room.view}
              </div>
            </div>

            {/* Thumbnails */}
            {roomImages.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-1">
                {roomImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#C5A880] scale-105'
                        : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#19231f] p-4 rounded-md border border-stone-800 text-xs">
            <div className="flex items-center space-x-2">
              <Maximize2 className="w-4 h-4 text-[#C5A880]" />
              <div>
                <span className="text-stone-400 block text-[10px]">Room Size</span>
                <span className="font-semibold text-white">{room.size}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#C5A880]" />
              <div>
                <span className="text-stone-400 block text-[10px]">Max Occupancy</span>
                <span className="font-semibold text-white">{room.occupancy}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Bed className="w-4 h-4 text-[#C5A880]" />
              <div>
                <span className="text-stone-400 block text-[10px]">Bed Type</span>
                <span className="font-semibold text-white">{room.bedType}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-[#C5A880]" />
              <div>
                <span className="text-stone-400 block text-[10px]">Outlook View</span>
                <span className="font-semibold text-white">{room.view}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
              About This Room
            </h4>
            <p className="text-stone-300 text-sm leading-relaxed">{room.description}</p>
          </div>

          {/* Verified Amenities */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3">
              Included In-Room Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-stone-200">
                  <span className="w-4 h-4 rounded-full bg-emerald-950 border border-emerald-500/60 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                  </span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Booking Advantage Box */}
          <div className="bg-[#1f2c26]/60 border border-emerald-700/40 rounded p-4 text-xs flex items-start space-x-3 text-stone-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Why Enquire Direct:</strong>
              <p className="mt-0.5 text-stone-300">
                Direct enquiries via website or WhatsApp receive priority room placement, complimentary early check-in assistance (subject to availability), and zero booking surcharges.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions and Illustrative Pricing */}
        <div className="px-6 py-4 bg-[#141d19] border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
              Illustrative Demo Rate
            </span>
            <div className="flex items-baseline space-x-1.5">
              <span className="font-display text-2xl font-bold text-white">
                ₹{room.pricePerNight.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-stone-400">/ night</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(whatsappRoomMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-emerald-900/60 border border-emerald-600/60 hover:bg-emerald-800/80 text-emerald-300 font-semibold text-xs rounded uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Enquire</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onSelectBooking(room.id);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-gradient-to-r from-[#C5A880] to-[#ad793a] text-slate-950 font-bold text-xs rounded uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Select & Book</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
