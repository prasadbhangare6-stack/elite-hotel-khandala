'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/hotelData';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8c5d2e]" />
            <span>Guest Assistance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Frequently Asked{' '}
            <span className="font-editorial italic font-normal text-[#8c5d2e]">
              Questions.
            </span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Everything you need to know about your stay, travel routes, and policies at Elite Hotel Khandala.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-stone-200/90 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C5A880]/30 text-stone-900' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 text-center text-xs text-stone-500">
          <span>Have an unanswered question? </span>
          <a
            href="#contact"
            className="text-[#8c5d2e] font-semibold hover:underline"
          >
            Ask our reception desk directly
          </a>
        </div>
      </div>
    </section>
  );
}
