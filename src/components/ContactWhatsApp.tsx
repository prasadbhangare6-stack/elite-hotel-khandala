'use client';

import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS } from '@/data/hotelData';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

export default function ContactWhatsApp() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    roomType: ROOMS[1].name,
    dates: '',
    guests: '2 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      roomType: ROOMS[1].name,
      dates: '',
      guests: '2 Guests',
      message: '',
    });
  };

  const directWhatsAppUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Elite Hotel Khandala, my name is ${formData.fullName || 'Guest'}. I would like to enquire about room rates for ${formData.roomType}.`
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#101713] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Direct Reservations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Connect With Our Khandala{' '}
            <span className="font-editorial italic font-normal text-[#E8DBC5]">
              Front Desk.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Skip portal booking fees and talk directly with our reception team on WhatsApp or submit a reservation enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Property Contact Details & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Instant WhatsApp Callout Card */}
            <div className="bg-gradient-to-br from-[#183124] to-[#122219] p-6 sm:p-8 rounded-xl border border-emerald-600/50 shadow-2xl relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-inner">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold block">
                    Fastest Response Channel
                  </span>
                  <h4 className="font-display text-xl font-bold text-white">Instant WhatsApp Reception</h4>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                Receive instant confirmation, ask about customized monsoon weekend packages, or share your estimated arrival time directly with the front desk manager.
              </p>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                  HOTEL_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-2 shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start WhatsApp Conversation</span>
              </a>

              <div className="mt-4 pt-3 border-t border-emerald-800/40 flex items-center justify-between text-[11px] text-emerald-300">
                <span>Verified Number: {HOTEL_INFO.phoneDisplay}</span>
                <span>Active 24/7</span>
              </div>
            </div>

            {/* Property Contact Info Card */}
            <div className="bg-[#16201b] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6">
              <h4 className="font-display text-lg font-bold text-white border-b border-stone-800 pb-3">
                Property Address & Telephone
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Physical Location:</strong>
                    <span className="text-stone-300">{HOTEL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Reception Telephone:</strong>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="text-amber-300 hover:underline block font-semibold"
                    >
                      {HOTEL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Email Enquiries:</strong>
                    <span className="text-stone-300">{HOTEL_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Check-In & Check-Out:</strong>
                    <span className="text-stone-300">
                      Check-in from {HOTEL_INFO.checkIn} • Check-out by {HOTEL_INFO.checkOut}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Enquiry Form */}
          <div className="lg:col-span-7 bg-[#16201b] p-6 sm:p-10 rounded-xl border border-stone-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                    Demo Simulation State
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Enquiry Form Submitted Successfully!
                  </h3>
                  <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. In production, this form triggers an instant SMS, email, and WhatsApp notification directly to the Elite Hotel reception desk.
                  </p>
                </div>

                <div className="bg-[#1f2c25] p-4 rounded-lg border border-stone-700 max-w-md mx-auto text-left text-xs space-y-1.5 text-stone-300">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Selected Room:</span>
                    <strong className="text-white">{formData.roomType}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Phone Contact:</span>
                    <strong className="text-white">{formData.phone}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Direct Benefit:</span>
                    <strong className="text-emerald-400">Zero Commission Rate</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs uppercase tracking-wider rounded font-medium"
                  >
                    Submit Another Test Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Send a Reservation Request
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Fill in your expected dates and room choice; we will verify availability and quote our best direct rate.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1b2520] border border-stone-700 rounded px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1b2520] border border-stone-700 rounded px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1b2520] border border-stone-700 rounded px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Room Category
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full bg-[#1b2520] border border-stone-700 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    >
                      {ROOMS.map((r) => (
                        <option key={r.id} value={r.name}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Expected Stay Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 15th to 17th November"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full bg-[#1b2520] border border-stone-700 rounded px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Total Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#1b2520] border border-stone-700 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests (Couple)</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Guests">4+ Guests (Family / Group)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Balcony preference, early check-in inquiry, meal requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1b2520] border border-stone-700 rounded px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                {error && (
                  <div className="flex items-center space-x-2 text-xs text-rose-400 bg-rose-950/40 border border-rose-800 p-2.5 rounded">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-stone-400 flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Demo mode: validates inputs and displays confirmation state.</span>
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#C5A880] to-[#ad793a] text-slate-950 font-bold text-xs uppercase tracking-wider rounded hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-950" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
