'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/hotelData';
import { ChevronDown, Sparkles } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#96754A] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Guest Assistance</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              Frequently Asked{' '}
              <span className="font-editorial italic text-[#96754A]">
                Questions.
              </span>
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Helpful details regarding your stay, check-in, parking, and dining at Elite Hotel Khandala.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delayMs={index * 40}>
                <div className="bg-[#FBF6EC] rounded-lg border border-stone-200/90 overflow-hidden transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-100/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-stone-900">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-stone-900' : 'text-stone-500'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 animate-fadeIn">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-10 text-center text-xs text-stone-500">
          <span>Need assistance with a specific request? </span>
          <a href="#contact" className="text-[#96754A] font-semibold hover:underline">
            Contact our reception desk directly
          </a>
        </div>
      </div>
    </section>
  );
}
