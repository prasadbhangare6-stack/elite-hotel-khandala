'use client';

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '@/data/hotelData';
import { X, ChevronLeft, ChevronRight, Sparkles, Eye } from 'lucide-react';

export default function CategorizedGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Rooms', 'Property', 'Dining', 'Surroundings'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8c5d2e] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8c5d2e]" />
              <span>Visual Journey</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              Moments at{' '}
              <span className="font-editorial italic font-normal text-[#8c5d2e]">
                Elite Hotel.
              </span>
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-xl">
              Glimpse into our rooms, serene balconies, on-site dining, and the natural splendour of Khandala.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#111714] text-white shadow-md'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-display text-sm font-bold">{item.title}</h4>
                <p className="text-[11px] text-stone-300 line-clamp-1 mt-0.5">{item.caption}</p>
                <div className="mt-2 flex items-center space-x-1 text-[10px] text-stone-300 font-medium">
                  <Eye className="w-3 h-3 text-[#C5A880]" />
                  <span>Click to view larger</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-stone-400 hover:text-white bg-black/50 rounded-full transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Main Displayed Image & Caption */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[72vh] max-w-full rounded-md object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-lg">
              <span className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-display text-xl font-bold">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-xs text-stone-300 mt-1">{filteredItems[lightboxIndex].caption}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
}
