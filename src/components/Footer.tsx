'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090D0B] text-stone-400 text-xs border-t border-[#1C2721] pb-14 md:pb-0">
      {/* Policy Callout Strip */}
      <div className="bg-[#070A09] border-b border-[#16201B] py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span className="font-medium text-stone-300">Check-in: {HOTEL_INFO.checkIn}</span>
            <span className="text-stone-600">•</span>
            <span className="font-medium text-stone-300">Check-out: {HOTEL_INFO.checkOut}</span>
          </div>

          <div className="text-[11px] text-stone-400">
            Government photo identification required at arrival for all adult guests
          </div>

          <div className="text-[11px] text-stone-400">
            Direct Bookings: Best Available Rate & Front Desk Assistance
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Wordmark */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-semibold tracking-wider text-white">
                ELITE HOTEL
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-medium -mt-1">
                Khandala • Sahyadris
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              A serene boutique hill retreat in Khandala, Maharashtra. Offering comfortable AC rooms, scenic balcony suites, on-site multi-cuisine dining, and seamless 90-minute connectivity from Mumbai and Pune.
            </p>

            <div className="pt-2 text-stone-300 space-y-1.5">
              <p className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{HOTEL_INFO.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition-colors">
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-[#C5A880] transition-colors">
                  Deluxe King Room
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#C5A880] transition-colors">
                  Super Deluxe Balcony Room
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#C5A880] transition-colors">
                  Executive Suite with Bathtub
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#C5A880] transition-colors">
                  Property Amenities
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#C5A880] transition-colors">
                  Dining & Bar
                </a>
              </li>
            </ul>
          </div>

          {/* Nearby Sights */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Local Sights
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-stone-300">Kune Waterfalls</span> (1.8 km)
              </li>
              <li>
                <span className="text-stone-300">Khandala Station</span> (800 m)
              </li>
              <li>
                <span className="text-stone-300">Duke's Nose</span> (4.2 km)
              </li>
              <li>
                <span className="text-stone-300">Tiger's Leap</span> (9.5 km)
              </li>
              <li>
                <span className="text-stone-300">Bhushi Dam</span> (7.8 km)
              </li>
            </ul>
          </div>

          {/* Policies & Directions */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Guest Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-stone-400">Check-in from 12:00 PM</span>
              </li>
              <li>
                <span className="text-stone-400">Check-out by 10:00 AM</span>
              </li>
              <li>
                <span className="text-stone-400">Government ID Required</span>
              </li>
              <li>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A880] hover:underline"
                >
                  Driving Route on Google Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-[#18231D] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Elite Hotel Khandala. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-[#131C17] hover:bg-[#C5A880] text-stone-400 hover:text-[#0E1411] transition-colors flex items-center space-x-1"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
