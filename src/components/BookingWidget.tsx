'use client';

import React, { useState } from 'react';
import { Calendar, Users, Home, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
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
  // Today and tomorrow dates formatted as YYYY-MM-DD
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[1].id); // Super Deluxe default
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
    <div
      className={`relative w-full max-w-6xl mx-auto bg-[#141b18]/95 backdrop-blur-xl border border-[#C5A880]/30 rounded-lg p-5 sm:p-7 shadow-2xl ${className}`}
    >
      {/* Top Banner with Direct Perks */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-stone-800/80 text-xs">
        <div className="flex items-center space-x-2 text-stone-300 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          <span>Direct Reservation Desk • Instant Confirmation & 0% Booking Fee</span>
        </div>
        <div className="flex items-center space-x-2 text-amber-300/90 font-medium">
          <Tag className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Direct Guests Save up to 15% vs Third-Party Portals</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Check-In Date */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-semibold text-[#D8CFBC] flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Check-in</span>
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={handleCheckInChange}
              className="w-full bg-[#1b2521] border border-stone-700/80 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
              required
            />
          </div>
        </div>

        {/* Check-Out Date */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-semibold text-[#D8CFBC] flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Check-out</span>
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={handleCheckOutChange}
              className="w-full bg-[#1b2521] border border-stone-700/80 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
              required
            />
          </div>
        </div>

        {/* Guests Selector */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-semibold text-[#D8CFBC] flex items-center space-x-1.5">
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
            className="w-full bg-[#1b2521] border border-stone-700/80 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
          >
            <option value="1-0">1 Adult (Solo Stay)</option>
            <option value="2-0">2 Adults (Couple)</option>
            <option value="2-1">2 Adults, 1 Child</option>
            <option value="3-0">3 Adults</option>
            <option value="3-1">3 Adults, 1 Child</option>
            <option value="4-0">4 Adults (Group / Family)</option>
          </select>
        </div>

        {/* Room Category */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-semibold text-[#D8CFBC] flex items-center space-x-1.5">
            <Home className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Room Category</span>
          </label>
          <select
            value={selectedRoomId}
            onChange={(e) => setSelectedRoomId(e.target.value)}
            className="w-full bg-[#1b2521] border border-stone-700/80 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
          >
            {ROOMS.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#C5A880] via-[#d5b58d] to-[#ad793a] text-stone-950 font-bold py-2.5 px-4 rounded text-xs tracking-wider uppercase flex items-center justify-center space-x-2 shadow-lg hover:brightness-110 active:scale-95 transition-all h-[42px]"
          >
            <span>Check Rates</span>
            <ArrowRight className="w-4 h-4 text-stone-950" />
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-3 text-xs text-rose-400 bg-rose-950/40 border border-rose-800/60 rounded px-3 py-1.5">
          {error}
        </div>
      )}
    </div>
  );
}
