/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustRow } from './components/TrustRow';
import { SkinConcernsSection } from './components/SkinConcernsSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { JourneySection } from './components/JourneySection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TreatmentModal } from './components/TreatmentModal';
import { Treatment } from './data/clinicData';

export default function App() {
  const [selectedConcern, setSelectedConcern] = useState<string>('acne');
  const [activeTreatmentModal, setActiveTreatmentModal] = useState<Treatment | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('appointment-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTreatments = () => {
    const el = document.getElementById('treatments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectConcern = (concernId: string) => {
    setSelectedConcern(concernId);
  };

  const handleBookTreatment = (_treatmentTitle: string) => {
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#22191c] flex flex-col font-sans selection:bg-[#ffd9dc] selection:text-[#4b0015] overflow-x-hidden">
      {/* Fixed Header */}
      <Header onBookClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 
          Hero Section:
          - 16:9 aspect-ratio on desktop
          - Full original composition preserved with object-fit: contain
          - Dominant Headline: "Rewrite Your Skin Story."
          - Secondary Headline directly below: "In Derma Remedy."
          - Preserved CTA: "Book an Appointment" & "Explore Treatments"
        */}
        <HeroSection
          onBookClick={scrollToBooking}
          onExploreClick={scrollToTreatments}
        />

        {/* 4 Trust Highlights */}
        <TrustRow />

        {/* Self-Guided Dermatology: Skin Concerns Selector */}
        <SkinConcernsSection
          onSelectConcern={handleSelectConcern}
          onBookClick={scrollToBooking}
        />

        {/* Comprehensive Treatments Catalog */}
        <TreatmentsSection
          onSelectTreatment={(treatment) => setActiveTreatmentModal(treatment)}
          onBookClick={scrollToBooking}
        />

        {/* About Clinic Split View */}
        <AboutSection />

        {/* The Derma Remedy Standard: 4 Pillars */}
        <PillarsSection />

        {/* Step-by-Step Care: Patient Care Journey */}
        <JourneySection />

        {/* Walkthrough: Inside Derma Remedy Gallery */}
        <GallerySection />

        {/* Google Testimonials: 5.0 Star Rating & Verified Reviews */}
        <ReviewsSection />

        {/* Priority Reservation: Interactive Consultation Booking Form */}
        <BookingSection selectedConcern={selectedConcern} />

        {/* Location & Hours + Directions Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onBookClick={scrollToBooking} />

      {/* Treatment Details Modal */}
      <TreatmentModal
        treatment={activeTreatmentModal}
        onClose={() => setActiveTreatmentModal(null)}
        onBookTreatment={handleBookTreatment}
      />
    </div>
  );
}
