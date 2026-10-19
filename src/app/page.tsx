'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingWidget, { BookingDetails } from '@/components/BookingWidget';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import DiningExperiences from '@/components/DiningExperiences';
import CategorizedGallery from '@/components/CategorizedGallery';
import ReviewsSection from '@/components/ReviewsSection';
import LocationAttractions from '@/components/LocationAttractions';
import FaqSection from '@/components/FaqSection';
import ContactWhatsApp from '@/components/ContactWhatsApp';
import Footer from '@/components/Footer';
import QuickEnquiryModal from '@/components/QuickEnquiryModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import PropertyIntro from '@/components/PropertyIntro';
import { ScrollProgressBar, MarqueeStrip, StatsBand, ParallaxDivider, DirectVsOtaStrip } from '@/components/PremiumMotion';
import { Preloader, FilmGrain, SideDots, PinnedMoments } from '@/components/Cinematic';
import { StickySubNav, TrustStrip, OffersTabs, ExperiencesCarousel } from '@/components/TajDella';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeBookingDetails, setActiveBookingDetails] = useState<BookingDetails | null>(null);

  const handleOpenBooking = () => {
    setActiveBookingDetails(null);
    setIsBookingModalOpen(true);
  };

  const handleSearchBooking = (details: BookingDetails) => {
    setActiveBookingDetails(details);
    setIsBookingModalOpen(true);
  };

  const handleSelectRoomBooking = (roomId: string) => {
    const today = new Date().toISOString().split('T')[0];
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().split('T')[0];

    setActiveBookingDetails({
      checkIn: today,
      checkOut: tomorrow,
      adults: 2,
      children: 0,
      rooms: 1,
      selectedRoomId: roomId,
    });
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col relative bg-[#FBF6EC]">
      <Preloader />
      <FilmGrain />
      <ScrollProgressBar />
      <SideDots />
      {/* 0. Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 1. Premium Hero with visual, value proposition, trust indicators, and booking CTA */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 2. Booking / Availability Enquiry Card */}
      <BookingWidget onSearch={handleSearchBooking} />
      <StickySubNav />
      <MarqueeStrip />
      <TrustStrip />
      {/* Editorial About — revived orphan, verified facts only */}
      <PropertyIntro onOpenBooking={handleOpenBooking} />
      <StatsBand />

      {/* 3. Featured Rooms & Suites (Concise, Visual, Scannable) */}
      <RoomsSection onSelectRoomBooking={handleSelectRoomBooking} />

      <DirectVsOtaStrip onOpenBooking={handleOpenBooking} />

      {/* 4. Why Stay With Us / Key Verified Amenities */}
      <AmenitiesSection />
      <ParallaxDivider />

      {/* 5. Dining & Khandala Experience */}
      <DiningExperiences onOpenBooking={handleOpenBooking} />

      <ExperiencesCarousel />
      <OffersTabs />

      {/* 6. Real Moments filmstrip + Photo Gallery (Categorized with Lightbox) */}
      <PinnedMoments />
      <CategorizedGallery />

      <ParallaxDivider image="/images/hotel/real-dukes-nose.jpg" title="Duke’s Nose. Sunset, Twelve Minutes Away." sub="The iconic Nagphani cliff — hike up for 360° sunset panoramas over the Sahyadri valley." />

      {/* 7. Guest Reviews + 'Book Directly. Stay Better.' */}
      <ReviewsSection onOpenBooking={handleOpenBooking} />

      {/* 8. Location, Map & Nearby Attractions */}
      <LocationAttractions />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Final Booking CTA & Contact Desk */}
      <ContactWhatsApp />

      {/* Footer & Policies */}
      <Footer />

      {/* Global Interactive Booking & Rates Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialDetails={activeBookingDetails}
      />

      {/* Desktop Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Action Bar (Call / WhatsApp / Check Dates) */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />
    </main>
  );
}
