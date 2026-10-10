'use client';

import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '@/data/hotelData';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Stay & Rooms', href: '#rooms' },
    { label: 'Facilities', href: '#amenities' },
    { label: 'Dining', href: '#dining' },
    { label: 'Attractions', href: '#attractions' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Guest Reviews', href: '#reviews' },
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
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0e1411] text-[#D8CFBC] text-xs py-2 px-4 border-b border-[#24332B] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-xs text-amber-200/90">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Direct Booking Advantage: Best Rates Guaranteed & Priority Check-in</span>
            </span>
            <span className="flex items-center space-x-1 text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Khandala, Maharashtra</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center space-x-1.5 hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>{HOTEL_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(HOTEL_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Reception</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`fixed top-0 md:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f1613]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#26372E]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <a href="#" className="flex flex-col group">
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-wider text-white group-hover:text-[#E8DBC5] transition-colors">
              ELITE HOTEL
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-medium -mt-1">
              Khandala • Sahyadri Hills
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-stone-200 hover:text-[#C5A880] transition-colors tracking-wide py-1 border-b border-transparent hover:border-[#C5A880]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(HOTEL_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-md border border-emerald-600/60 text-emerald-300 hover:bg-emerald-950/40 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quick WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#C5A880] to-[#ad793a] text-slate-950 font-semibold px-5 py-2.5 rounded-sm shadow-lg hover:brightness-110 active:scale-95 transition-all text-xs tracking-wider uppercase"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="bg-[#C5A880] text-slate-950 px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">ELITE HOTEL</span>
                <span className="text-xs uppercase tracking-widest text-[#C5A880]">Khandala</span>
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
                  className="text-lg font-serif text-stone-200 hover:text-[#C5A880] py-2 border-b border-stone-800/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#C5A880] text-stone-950 font-bold uppercase tracking-wider text-sm rounded flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Availability & Book</span>
            </button>

            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(HOTEL_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-900/60 border border-emerald-600/50 text-emerald-300 font-semibold text-sm rounded flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat Directly on WhatsApp</span>
            </a>

            <div className="text-center text-xs text-stone-400 pt-2">
              <p>Direct Enquiries: {HOTEL_INFO.phoneDisplay}</p>
              <p className="text-[11px] text-stone-500 mt-1">Opp. Kamat Hotel, B P Road, Khandala</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
