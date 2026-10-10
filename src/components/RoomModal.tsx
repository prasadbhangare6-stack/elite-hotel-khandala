'use client';

import React, { useState, useEffect } from 'react';
import { RoomCategory, HOTEL_INFO } from '@/data/hotelData';
import { X, Check, Users, Maximize2, Bed, Eye, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

interface RoomModalProps {
  room: RoomCategory | null;
  onClose: () => void;
  onSelectBooking: (roomId: string) => void;
}

export default function RoomModal({ room, onClose, onSelectBooking }: RoomModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!room) return null;

  const roomImages = room.galleryImages.length > 0 ? room.galleryImages : [room.heroImage];

  const whatsappRoomMessage = `Hello Elite Hotel Khandala, I am interested in reserving the ${room.name}. Please share available dates.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0E1411] text-white rounded-lg border border-[#C5A880]/30 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#121A15]">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-medium">
              Elite Hotel Khandala
            </span>
            <h3 id="room-modal-title" className="font-display text-xl sm:text-2xl font-bold text-white">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded transition-colors"
            aria-label="Close room details dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Main Photo Gallery Preview */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded overflow-hidden border border-stone-800 shadow-md bg-stone-900">
              <img
                src={roomImages[activeImageIndex]}
                alt={`${room.name} preview`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-[#0E1411]/85 backdrop-blur px-3 py-1 rounded text-xs text-[#E8DBC5]">
                {room.view}
              </div>
            </div>

            {/* Thumbnails */}
            {roomImages.length > 1 && (
              <div className="flex space-x-2.5 overflow-x-auto pb-1">
                {roomImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#C5A880] scale-105'
                        : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#141E18] p-4 rounded border border-stone-800 text-xs">
            <div className="flex items-center space-x-2">
              <Maximize2 className="w-4 h-4 text-[#C5A880]" />
              <div>
                <span className="text-stone-400 block text-[10px]">Floor Space</span>
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
                <span className="text-stone-400 block text-[10px]">Outlook</span>
                <span className="font-semibold text-white">{room.view}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
              Room Overview
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">{room.description}</p>
          </div>

          {/* Amenities Checklist */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold mb-3">
              Included In-Room Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-200">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-950 border border-emerald-600/60 flex items-center justify-center shrink-0">
                    <Check className="w-2 h-2 text-emerald-400" />
                  </span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Reservation Guarantee */}
          <div className="bg-[#14221A] border border-emerald-800/40 rounded p-3.5 text-xs flex items-start space-x-3 text-stone-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Direct Reservation Benefit:</strong>
              <p className="mt-0.5 text-stone-300 text-[11px]">
                Direct booking ensures personal communication with our reception desk, prompt confirmation, and personalized attention during your stay.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#121A15] border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-400">
            Check-in from 12:00 PM • Check-out by 10:00 AM
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(whatsappRoomMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2 bg-[#16291E] border border-emerald-600/50 hover:bg-emerald-900/40 text-emerald-300 font-medium text-xs rounded uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onSelectBooking(room.id);
              }}
              className="flex-1 sm:flex-initial px-5 py-2 bg-[#C5A880] hover:bg-[#d5b992] text-[#0E1411] font-semibold text-xs rounded uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0E1411]" />
              <span>Check Dates</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
