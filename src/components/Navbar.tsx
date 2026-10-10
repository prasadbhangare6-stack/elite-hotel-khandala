'use client';

import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Rooms & Suites', href: '#rooms' },
    { label: 'Key Amenities', href: '#amenities' },
    { label: 'Dining & Experiences', href: '#dining' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Guest Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Bar (Subtle & Quiet) */}
      <div className="bg-[#090D0B] text-stone-300 text-xs py-1.5 px-4 border-b border-[#1E2923] hidden md:block transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6 text-[11px] text-stone-400">
            <span className="flex items-center space-x-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>B P Road, Opposite Kamat Hotel, Khandala</span>
            </span>
            <span className="text-[#C5A880]/90">
              Direct Booking Privilege: Best Available Rate & Priority Check-in
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center space-x-1 text-stone-300 hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>{HOTEL_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(HOTEL_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-stone-300 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>Front Desk WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`fixed top-0 md:top-[31px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'frosted-nav shadow-lg py-3'
            : 'bg-gradient-to-b from-[#0E1411]/85 via-[#0E1411]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex flex-col group">
            <span className="font-display text-2xl sm:text-3xl font-medium tracking-wide text-white group-hover:text-[#E8DBC5] transition-colors">
              ELITE HOTEL
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-medium -mt-1">
              Khandala • Sahyadris
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-stone-200 hover:text-[#C5A880] transition-colors tracking-wide py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(HOTEL_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center space-x-1.5 px-3 py-2 text-xs text-stone-300 hover:text-white border border-stone-700/60 hover:border-stone-500 rounded transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center space-x-2 bg-[#C5A880] hover:bg-[#d5b992] text-[#0E1411] font-semibold px-5 py-2.5 rounded text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0E1411]" />
              <span>Reserve Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="bg-[#C5A880] text-[#0E1411] px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-stone-200 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-stone-100" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#0E1411]/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-white">ELITE HOTEL</span>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880]">Khandala</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-400 hover:text-white"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-display text-stone-200 hover:text-[#C5A880] py-2 border-b border-stone-800/40"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-stone-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#C5A880] text-[#0E1411] font-semibold uppercase tracking-wider text-xs rounded flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Availability</span>
            </button>

            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(HOTEL_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#15231c] border border-emerald-700/50 text-emerald-300 text-xs rounded flex items-center justify-center space-x-2 font-medium"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
