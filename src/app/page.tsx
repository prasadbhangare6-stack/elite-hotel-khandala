'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyIntro from '@/components/PropertyIntro';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import DiningExperiences from '@/components/DiningExperiences';
import CategorizedGallery from '@/components/CategorizedGallery';
import ReviewsSection from '@/components/ReviewsSection';
import LocationAttractions from '@/components/LocationAttractions';
import ContactWhatsApp from '@/components/ContactWhatsApp';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import QuickEnquiryModal from '@/components/QuickEnquiryModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ClientPitchBanner from '@/components/ClientPitchBanner';
import { BookingDetails } from '@/components/BookingWidget';

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
    <main className="min-h-screen flex flex-col relative bg-[#FAF8F5]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero with Cinematic Visual & Embedded Search Widget */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onSearchBooking={handleSearchBooking}
      />

      {/* Property Introduction & Setting */}
      <PropertyIntro onOpenBooking={handleOpenBooking} />

      {/* Verified Rooms & Balcony Suites */}
      <RoomsSection onSelectRoomBooking={handleSelectRoomBooking} />

      {/* Verified Facilities & Amenities */}
      <AmenitiesSection />

      {/* Multi-Cuisine Dining & Khandala Experiences */}
      <DiningExperiences onOpenBooking={handleOpenBooking} />

      {/* Categorized Filterable Gallery with Lightbox */}
      <CategorizedGallery />

      {/* Verified Guest Reviews & Direct Booking ROI */}
      <ReviewsSection />

      {/* Location, Directions & Verified Nearby Attractions */}
      <LocationAttractions />

      {/* Direct Contact & Enquiry Form with Instant WhatsApp */}
      <ContactWhatsApp />

      {/* Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* Footer & Policies */}
      <Footer />

      {/* Global Interactive Booking & Rates Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialDetails={activeBookingDetails}
      />

      {/* Floating 24/7 WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Client Pitch Presentation Tool for Web Developer */}
      <ClientPitchBanner />
    </main>
  );
}
