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
  AlertCircle,
} from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [apiWhatsappUrl, setApiWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          roomType: formData.roomType,
          checkIn: formData.dates,
          checkOut: '',
          adults: formData.guests,
          message: formData.message,
          source: 'contact-section-form',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setLeadId(data.leadId);
        setApiWhatsappUrl(data.whatsappUrl);
      }
      setSubmitted(true);
    } catch (err) {
      console.warn('API submission fallback to direct WhatsApp', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setLeadId(null);
    setApiWhatsappUrl(null);
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

  const directWhatsAppUrl =
    apiWhatsappUrl ||
    `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
      `Hello Elite Hotel Khandala, my name is ${formData.fullName || 'Guest'}. I would like to inquire about reservation availability for ${formData.roomType}.`
    )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#181410] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Direct Reservations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Connect With Our{' '}
              <span className="font-editorial italic text-[#EFE3CC]">
                Front Desk.
              </span>
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              Reach our reception team directly for room reservations, weekend inquiries, or customized group packages.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Property Contact & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="bg-[#211B16] p-6 sm:p-7 rounded-xl border border-emerald-700/40 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-semibold block">
                      Quick Assistance
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">
                      WhatsApp Front Desk
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed mb-5">
                  Send a direct message to check real-time availability, request special meal preferences, or coordinate arrival times directly with the manager.
                </p>

                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                    HOTEL_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-2 shadow transition-colors active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div className="bg-[#211B16] p-6 sm:p-7 rounded-xl border border-stone-800 space-y-4">
                <h4 className="font-display text-base font-bold text-white border-b border-stone-800 pb-2">
                  Property Contact Information
                </h4>

                <div className="space-y-3.5 text-xs">
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
                      <a href={`tel:${HOTEL_INFO.phone}`} className="text-[#EFE3CC] hover:underline font-semibold">
                        {HOTEL_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Email Inquiries:</strong>
                      <span className="text-stone-300">{HOTEL_INFO.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Standard Hours:</strong>
                      <span className="text-stone-300">
                        Check-in: {HOTEL_INFO.checkIn} • Check-out: {HOTEL_INFO.checkOut}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Reservation Request Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={150}>
              <div className="bg-[#211B16] p-6 sm:p-8 rounded-xl border border-stone-800 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-5 animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <div className="space-y-1.5">
                      {leadId && (
                        <span className="inline-block px-2.5 py-0.5 mb-1 bg-emerald-950/80 border border-emerald-700/60 rounded text-[11px] font-mono text-emerald-300">
                          Booking Lead Ref: #{leadId}
                        </span>
                      )}
                      <h3 className="font-display text-2xl font-bold text-white">
                        Inquiry Received & Dispatched
                      </h3>
                      <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{formData.fullName}</strong>. Our front desk team at Elite Hotel Khandala has logged your booking request in our system.
                      </p>
                    </div>

                    <div className="bg-[#241E18] p-4 rounded border border-stone-700 max-w-md mx-auto text-left text-xs space-y-1 text-stone-300">
                      <div className="flex justify-between">
                        <span className="text-stone-400">Selected Room:</span>
                        <strong className="text-white">{formData.roomType}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Phone Contact:</span>
                        <strong className="text-white">{formData.phone}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Assistance:</span>
                        <span className="text-emerald-400">Priority Response</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                      <a
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Confirm via WhatsApp</span>
                      </a>

                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs uppercase tracking-wider rounded"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        Send a Reservation Request
                      </h3>
                      <p className="text-xs text-stone-400 mt-1">
                        Share your intended dates and room preference for our best available direct rate.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#241E18] border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#241E18] border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#241E18] border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                          Preferred Room
                        </label>
                        <select
                          value={formData.roomType}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className="w-full bg-[#241E18] border border-stone-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                        >
                          {ROOMS.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                          Intended Travel Dates
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 15th to 17th November"
                          value={formData.dates}
                          onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                          className="w-full bg-[#241E18] border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                          Guests
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-[#241E18] border border-stone-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                        >
                          <option value="1 Guest">1 Guest</option>
                          <option value="2 Guests">2 Guests (Couple)</option>
                          <option value="3 Guests">3 Guests</option>
                          <option value="4+ Guests">4+ Guests (Family / Group)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                        Notes or Inquiries
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Balcony view request, meal preference, arrival time..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#241E18] border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center space-x-2 text-xs text-rose-300 bg-rose-950/40 border border-rose-800 p-2 rounded">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-7 py-2.5 bg-[#C5A880] hover:bg-[#D9C29A] disabled:opacity-75 text-[#181410] font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2 shadow"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-3.5 h-3.5 border-2 border-[#181410] border-t-transparent rounded-full animate-spin" />
                            <span>Dispatching Request...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 text-[#181410]" />
                            <span>Send Reservation Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
