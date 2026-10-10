'use client';

import React from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Phone, Mail, MapPin, MessageCircle, Heart, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b100d] text-stone-400 text-xs border-t border-[#1e2a24]">
      {/* Policy Callout Strip */}
      <div className="bg-[#080c0a] border-b border-[#18231e] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span className="font-semibold text-stone-300">Check-in: {HOTEL_INFO.checkIn}</span>
            <span className="text-stone-600">•</span>
            <span className="font-semibold text-stone-300">Check-out: {HOTEL_INFO.checkOut}</span>
          </div>

          <div className="text-[11px] text-stone-400">
            Mandatory Govt Photo ID required at check-in (Aadhaar / Passport / DL)
          </div>

          <div className="text-[11px] text-amber-200/80 bg-amber-950/30 border border-amber-900/40 px-2.5 py-1 rounded">
            Client Presentation Demo • 0% Middleman Commissions
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Wordmark */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                ELITE HOTEL
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold -mt-1">
                Khandala • Sahyadri Hills
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              A tranquil boutique hill station retreat in Khandala, Maharashtra. Offering comfortable AC rooms, scenic mountain mist balconies, an on-site multi-cuisine restaurant, and swift connectivity from Mumbai and Pune.
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
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Explore Property
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-[#C5A880] transition-colors">
                  AC Deluxe Rooms
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#C5A880] transition-colors">
                  Super Deluxe with Balcony
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#C5A880] transition-colors">
                  AC Suite with Bathtub
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#C5A880] transition-colors">
                  Verified Facilities
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#C5A880] transition-colors">
                  In-House Dining & Bar
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A880] transition-colors">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Nearby & Sights */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Local Khandala
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-stone-300">Kune Falls</span> (1.8 km)
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
              <li>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A880] hover:underline"
                >
                  View Route on Google Maps →
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Policies & Demo Note */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Policies & Terms
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="hover:text-stone-300 cursor-pointer">
                  Standard Cancellation Policy*
                </span>
              </li>
              <li>
                <span className="hover:text-stone-300 cursor-pointer">
                  Government ID Requirements
                </span>
              </li>
              <li>
                <span className="hover:text-stone-300 cursor-pointer">
                  Outside Food & Dining Terms
                </span>
              </li>
              <li>
                <span className="hover:text-stone-300 cursor-pointer">
                  Privacy Policy & Data Security
                </span>
              </li>
            </ul>
            <div className="mt-3 p-2.5 rounded bg-[#141d18] border border-stone-800 text-[10px] text-stone-400">
              *Notice: Legal policies and prices marked for hotel client approval before production launch.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-[#1a2520] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Elite Hotel Khandala. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-stone-400">
              Demo prepared for client demonstration & acquisition
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-stone-900 hover:bg-[#C5A880] text-stone-400 hover:text-stone-950 transition-colors flex items-center space-x-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
