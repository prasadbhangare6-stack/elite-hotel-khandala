'use client';

import React, { useState } from 'react';
import { Calendar, Users, Home, ArrowRight, ShieldCheck } from 'lucide-react';
import { ROOMS } from '@/data/hotelData';

interface BookingWidgetProps {
  onSearch: (bookingDetails: BookingDetails) => void;
  className?: string;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  selectedRoomId: string;
}

export default function BookingWidget({ onSearch, className = '' }: BookingWidgetProps) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[1].id); // Super Deluxe Balcony default
  const [error, setError] = useState<string | null>(null);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    setError(null);
    if (new Date(newCheckIn) >= new Date(checkOut)) {
      const nextDay = new Date(newCheckIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(formatDate(nextDay));
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckOut = e.target.value;
    if (new Date(newCheckOut) <= new Date(checkIn)) {
      setError('Check-out date must be after check-in date');
      return;
    }
    setError(null);
    setCheckOut(newCheckOut);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (new Date(checkOut) <= new Date(checkIn)) {
      setError('Please select a valid check-out date.');
      return;
    }
    setError(null);
    onSearch({
      checkIn,
      checkOut,
      adults,
      children,
      rooms: roomCount,
      selectedRoomId,
    });
  };

  return (
    <section id="booking-enquiry" className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6">
      <div
        className={`w-full bg-[#0E1411] border border-[#C5A880]/25 rounded-lg p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${className}`}
      >
        {/* Top Direct Booking Value Proposition Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-stone-800 text-xs">
          <div className="flex items-center space-x-2 text-stone-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>Official Hotel Reservation Desk • Best Available Direct Rate</span>
          </div>
          <div className="text-stone-400 text-[11px]">
            Complimentary Early Arrival Assistance (Subject to Availability)
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Check-In Date */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-300 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Check-in</span>
            </label>
            <input
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={handleCheckInChange}
              className="w-full bg-[#16201B] border border-stone-700/70 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] transition-colors"
              required
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-300 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Check-out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={handleCheckOutChange}
              className="w-full bg-[#16201B] border border-stone-700/70 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] transition-colors"
              required
            />
          </div>

          {/* Guests Selector */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-300 flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Guests</span>
            </label>
            <select
              value={`${adults}-${children}`}
              onChange={(e) => {
                const [a, c] = e.target.value.split('-').map(Number);
                setAdults(a);
                setChildren(c);
              }}
              className="w-full bg-[#16201B] border border-stone-700/70 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] transition-colors"
            >
              <option value="1-0">1 Adult (Solo)</option>
              <option value="2-0">2 Adults (Couple)</option>
              <option value="2-1">2 Adults, 1 Child</option>
              <option value="3-0">3 Adults</option>
              <option value="3-1">3 Adults, 1 Child</option>
              <option value="4-0">4 Adults (Family / Group)</option>
            </select>
          </div>

          {/* Room Category */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-300 flex items-center space-x-1.5">
              <Home className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Room Category</span>
            </label>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full bg-[#16201B] border border-stone-700/70 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] transition-colors"
            >
              {ROOMS.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Action CTA Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#C5A880] hover:bg-[#d5b992] text-[#0E1411] font-semibold py-2.5 px-4 rounded text-xs tracking-wider uppercase flex items-center justify-center space-x-1.5 shadow transition-all duration-200 h-[40px] group"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0E1411] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-3 text-xs text-rose-300 bg-rose-950/40 border border-rose-800/60 rounded px-3 py-1.5">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}
