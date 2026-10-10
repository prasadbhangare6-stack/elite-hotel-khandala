'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '@/data/hotelData';
import { X, ChevronLeft, ChevronRight, Sparkles, Eye } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function CategorizedGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Rooms', 'Property', 'Dining', 'Surroundings'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Visual Journey</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
                Moments at{' '}
                <span className="font-editorial italic text-[#8c5d2e]">
                  Elite Hotel.
                </span>
              </h2>
              <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-xl">
                Explore our rooms, private balconies, warm dining spaces, and the surrounding Khandala valley scenery.
              </p>
            </div>

            {/* Filter Tabs with Smooth Transition */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs tracking-wider uppercase rounded transition-all duration-200 font-medium ${
                    activeCategory === cat
                      ? 'bg-[#0E1411] text-white shadow-sm'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delayMs={index * 50}>
              <div
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-200 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-display text-sm font-bold">{item.title}</h4>
                  <p className="text-[11px] text-stone-300 line-clamp-1 mt-0.5">{item.caption}</p>
                  <div className="mt-2 flex items-center space-x-1 text-[10px] text-stone-300">
                    <Eye className="w-3 h-3 text-[#C5A880]" />
                    <span>View photo</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Elegant Lightbox Modal with Keyboard Navigation & Smooth Scale */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white bg-black/40 rounded-full transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 text-stone-300 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Displayed Image and Caption Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[72vh] max-w-full rounded object-contain shadow-2xl"
            />
            <div className="mt-3.5 text-center text-white max-w-lg">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block mb-0.5">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-display text-lg font-bold">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-xs text-stone-300 mt-0.5">{filteredItems[lightboxIndex].caption}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 text-stone-300 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
