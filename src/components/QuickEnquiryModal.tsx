'use client';

import React, { useState } from 'react';
import { ROOMS, HOTEL_INFO, RoomCategory } from '@/data/hotelData';
import { BookingDetails } from './BookingWidget';
import {
  X,
  Calendar,
  Users,
  CheckCircle2,
  MessageCircle,
  Tag,
  ShieldCheck,
  Send,
  Sparkles,
} from 'lucide-react';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: BookingDetails | null;
}

export default function QuickEnquiryModal({
  isOpen,
  onClose,
  initialDetails,
}: QuickEnquiryModalProps) {
  const defaultRoom = ROOMS[1]; // Super Deluxe with Balcony

  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialDetails?.checkIn || todayStr);
  const [checkOut, setCheckOut] = useState(initialDetails?.checkOut || tomorrowStr);
  const [adults, setAdults] = useState(initialDetails?.adults || 2);
  const [selectedRoomId, setSelectedRoomId] = useState(
    initialDetails?.selectedRoomId || defaultRoom.id
  );
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || defaultRoom;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)));
  const calculatedTotal = currentRoom.pricePerNight * diffTime;

  const whatsappMessage = `Hello Elite Hotel Khandala! I am requesting a direct booking enquiry:
• Room: ${currentRoom.name}
• Check-in: ${checkIn}
• Check-out: ${checkOut} (${diffTime} night${diffTime > 1 ? 's' : ''})
• Guests: ${adults} Adults
• Name: ${guestName || 'Guest'}${guestPhone ? `\n• Phone: ${guestPhone}` : ''}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#111714] text-white rounded-lg border border-[#C5A880]/40 shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16211c] border-b border-stone-800">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>Direct Reservation Desk</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Check Availability & Direct Rates
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">
                  Demo Simulated Action
                </span>
                <h4 className="font-display text-2xl font-bold text-white mt-1">
                  Enquiry Received For {currentRoom.name}!
                </h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{guestName || 'Guest'}</strong>! In the live website, this instantly notifies the front desk reception at +91 79720 01916.
                </p>
              </div>

              <div className="p-4 rounded bg-[#18231e] border border-stone-800 max-w-md mx-auto text-xs text-left space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-400">Duration:</span>
                  <span className="text-white font-medium">{checkIn} to {checkOut} ({diffTime} night{diffTime > 1 ? 's' : ''})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Illustrative Estimate:</span>
                  <span className="text-[#C5A880] font-bold">₹{calculatedTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Middleman Fee:</span>
                  <span className="text-emerald-400 font-bold">₹0 (Direct Booking)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs uppercase tracking-wider rounded"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Selected Room Preview Strip */}
              <div className="flex items-center space-x-4 bg-[#18231e] p-3.5 rounded-lg border border-stone-800">
                <img
                  src={currentRoom.heroImage}
                  alt={currentRoom.name}
                  className="w-20 h-16 rounded object-cover border border-stone-700 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold">
                    Selected Accommodation
                  </span>
                  <h4 className="font-display text-base font-bold text-white truncate">
                    {currentRoom.name}
                  </h4>
                  <p className="text-xs text-stone-400 truncate">{currentRoom.size} • {currentRoom.bedType}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-stone-400 block">Rate</span>
                  <span className="font-display text-base font-bold text-white">
                    ₹{currentRoom.pricePerNight}
                  </span>
                  <span className="text-[10px] text-stone-400 block">/ night*</span>
                </div>
              </div>

              {/* Date & Guest Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-stone-300 block mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#1b2520] border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-stone-300 block mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#1b2520] border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-stone-300 block mb-1">
                    Guests
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-[#1b2520] border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults (Couple)</option>
                    <option value={3}>3 Adults</option>
                    <option value={4}>4 Adults (Family / Group)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-stone-300 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#1b2520] border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-stone-300 block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#1b2520] border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              {/* Direct Booking Advantage Summary */}
              <div className="bg-[#1a2922]/80 border border-emerald-700/50 rounded-lg p-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-300">
                    Stay Duration ({diffTime} Night{diffTime > 1 ? 's' : ''}):
                  </span>
                  <span className="text-white font-semibold">
                    ₹{calculatedTotal.toLocaleString('en-IN')}* (Demo rate)
                  </span>
                </div>
                <div className="flex items-center justify-between text-emerald-400">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Direct Booking Commission Savings:</span>
                  </span>
                  <span className="font-bold">Zero Platform Fees</span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#C5A880] to-[#ad793a] text-slate-950 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-2 shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Web Enquiry</span>
                </button>
              </div>

              <div className="text-[10px] text-stone-400 text-center">
                *Demo simulation: No actual financial transaction is processed.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
