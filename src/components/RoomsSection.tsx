'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ROOMS, RoomCategory, HOTEL_INFO } from '@/data/hotelData';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import RoomModal from './RoomModal';
import ScrollReveal from './ui/ScrollReveal';
import { RevealWords } from './Cinematic';

interface RoomsSectionProps {
  onSelectRoomBooking: (roomId: string) => void;
}

/**
 * Sticky image-and-text storytelling (Master Sec 3E).
 * Desktop: photograph stays pinned left, crossfades as each room scrolls into focus right.
 * Mobile: each room is a self-contained editorial block (deliberately designed, not compressed).
 */
export default function RoomsSection({ onSelectRoomBooking }: RoomsSectionProps) {
  const [selectedModalRoom, setSelectedModalRoom] = useState<RoomCategory | null>(null);
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: 0.1 }
    );
    blockRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#FBF6EC] text-stone-900 relative overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="clip">
          <div className="max-w-2xl mb-14 sm:mb-20">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-semibold text-[#96754A] mb-4">
              <span className="w-10 h-px bg-[#C5A880]" /> Rooms & Balcony Suites
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08]">
              <RevealWords text="Quiet Sanctuaries in the Hills." italicWords={['Hills.']} />
            </h2>
            <p className="mt-4 text-stone-600 text-base leading-relaxed">
              Climate-controlled rooms, plush bedding and high-speed Wi-Fi — and, in our signature Super Deluxe, a private balcony held inside the Sahyadri mist. Scroll; each room tells its own story.
            </p>
          </div>
        </ScrollReveal>

        <div className="lg:grid lg:grid-cols-12 lg:gap-14 items-start">
          {/* Sticky photograph — desktop only */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
              {ROOMS.map((room, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={room.id}
                  src={room.heroImage}
                  alt={room.name}
                  loading={i === 1 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white pointer-events-none">
                <div key={active} className="animate-fade-up">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#EFE3CC] font-semibold">{ROOMS[active].view}</div>
                  <div className="font-display text-2xl mt-1">{ROOMS[active].name}</div>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  {ROOMS.map((r, i) => (
                    <span key={r.id} className={`h-1 rounded-full transition-all duration-500 ${active === i ? 'w-8 bg-[#C5A880]' : 'w-3 bg-white/40'}`} />
                  ))}
                </div>
              </div>
              {ROOMS[active].featured && (
                <span className="absolute top-4 left-4 bg-[#181410]/90 text-[#EFE3CC] border border-[#C5A880]/50 text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5">Most Popular</span>
              )}
            </div>
            <p className="mt-3 text-[11px] text-stone-400 tracking-wide">Photography: real Elite Hotel rooms & balcony views. From ₹{ROOMS[active].pricePerNight.toLocaleString()} / night — direct rate.</p>
          </div>

          {/* Scrolling room narratives */}
          <div className="lg:col-span-5 flex flex-col gap-16 lg:gap-[22vh] lg:pb-[12vh]">
            {ROOMS.map((room, idx) => (
              <article
                key={room.id}
                ref={(el) => { blockRefs.current[idx] = el; }}
                data-idx={idx}
                className="scroll-mt-32"
              >
                <ScrollReveal variant={idx % 2 ? 'slide-left' : 'fade-up'}>
                  {/* Mobile / tablet image */}
                  <div className="lg:hidden relative aspect-[16/10] overflow-hidden mb-5 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={room.heroImage} alt={room.name} loading="lazy" decoding="async" className="w-full h-full object-cover img-zoom" />
                    {room.featured && <span className="absolute top-3 left-3 bg-[#181410]/90 text-[#EFE3CC] border border-[#C5A880]/50 text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1">Most Popular</span>}
                    <span className="absolute bottom-3 left-3 text-white text-xs bg-black/35 px-2 py-1 backdrop-blur-sm">{room.view}</span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className="font-editorial italic text-[#C5A880] text-xl">0{idx + 1}</span>
                    <span className="h-px flex-1 bg-stone-300/70" />
                    <span className="text-[11px] uppercase tracking-[0.18em] text-stone-400 font-semibold">{room.size} · {room.occupancy}</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-normal mt-4 leading-tight">{room.name}</h3>
                  <p className="mt-3 text-stone-600 leading-relaxed">{room.description}</p>

                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {room.amenities.slice(0, 6).map((a) => (
                      <li key={a} className="flex items-start gap-2 text-[13px] text-stone-600">
                        <Check className="w-3.5 h-3.5 text-[#96754A] mt-0.5 shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-end justify-between border-t border-stone-200 pt-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-bold">From · Direct Rate</div>
                      <div className="font-display text-3xl text-[#181410]">₹{room.pricePerNight.toLocaleString()}<span className="text-sm text-stone-400"> / night</span></div>
                    </div>
                    <div className="text-right text-xs text-stone-500 leading-relaxed">{room.keyDetails[0]}<br />{room.keyDetails[1]} · {room.bedType}</div>
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <button onClick={() => onSelectRoomBooking(room.id)} className="flex-1 py-3.5 px-5 bg-[#181410] hover:bg-[#96754A] text-white font-semibold text-xs rounded-sm uppercase tracking-[0.14em] transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
                      Check Availability <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => setSelectedModalRoom(room)} className="py-3.5 px-5 border border-stone-300 hover:border-[#96754A] hover:text-[#96754A] font-semibold text-xs rounded-sm uppercase tracking-[0.14em] transition-colors">
                      Room Details
                    </button>
                  </div>
                  <a href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(`Hello Elite Hotel Khandala, I would like to inquire about availability for ${room.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-emerald-800 hover:text-emerald-950">
                    <MessageCircle className="w-3.5 h-3.5" /> Ask about this room on WhatsApp
                  </a>
                </ScrollReveal>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedModalRoom && (
        <RoomModal room={selectedModalRoom} onClose={() => setSelectedModalRoom(null)} onSelectBooking={(roomId) => { setSelectedModalRoom(null); onSelectRoomBooking(roomId); }} />
      )}
    </section>
  );
}
