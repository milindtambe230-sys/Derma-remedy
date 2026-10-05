import React, { useState } from 'react';
import { CLINIC_CONCERNS, Concern } from '../data/clinicData';

interface SkinConcernsSectionProps {
  onSelectConcern: (concernId: string) => void;
  onBookClick: () => void;
}

export const SkinConcernsSection: React.FC<SkinConcernsSectionProps> = ({
  onSelectConcern,
  onBookClick,
}) => {
  const [selectedConcernId, setSelectedConcernId] = useState<string>('acne');

  const activeConcern = CLINIC_CONCERNS.find((c) => c.id === selectedConcernId) || CLINIC_CONCERNS[0];

  const handlePillClick = (concern: Concern) => {
    setSelectedConcernId(concern.id);
    onSelectConcern(concern.id);
  };

  return (
    <section id="skin-concerns" className="w-full py-16 sm:py-20 bg-[#fff8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
            Self-Guided Dermatology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold mt-2">
            What’s Your Skin Concern?
          </h2>
          <p className="text-sm sm:text-base text-[#554243] mt-2.5">
            Select an indication below to discover the targeted clinical interventions we offer in Ashta.
          </p>
        </div>

        {/* Concern Pill Grid */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
          {CLINIC_CONCERNS.map((concern) => {
            const isActive = concern.id === selectedConcernId;
            return (
              <button
                key={concern.id}
                onClick={() => handlePillClick(concern)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#6a1528] text-white shadow-md scale-105'
                    : 'bg-[#fbeaee] text-[#22191c] hover:bg-[#f5e4e8] hover:text-[#4b0015]'
                }`}
              >
                {concern.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Dynamic Concern Detail Display */}
        <div className="mt-8 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-[#dbc0c2]/40 shadow-sm transition-all">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#fbeaee] pb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6a1528] font-bold">
                Clinical Focus Protocol
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#4b0015] font-semibold mt-1">
                {activeConcern.headline}
              </h3>
            </div>
            <button
              onClick={() => {
                onSelectConcern(activeConcern.id);
                onBookClick();
              }}
              className="px-4 py-2 rounded-full bg-[#fbeaee] hover:bg-[#6a1528] text-[#6a1528] hover:text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Consult for this Concern</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </button>
          </div>

          <p className="text-[#554243] text-sm sm:text-base leading-relaxed mt-4">
            {activeConcern.overview}
          </p>

          <div className="mt-5 pt-4 border-t border-[#fbeaee]">
            <span className="text-xs uppercase tracking-wider text-[#554243] font-semibold block mb-2">
              Recommended Clinical Interventions:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeConcern.recommendedTreatments.map((treatment, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff0f3] text-[#4b0015] text-xs font-medium border border-[#dbc0c2]/30"
                >
                  <span className="material-symbols-outlined text-[14px] text-[#6a1528]">check_circle</span>
                  <span>{treatment}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Concern Diagnostic Snapshot Box */}
        <div className="mt-8 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#fff0f3] border border-[#dbc0c2]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#6a1528] text-[28px] shrink-0">
              lightbulb
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold text-[#4b0015]">
                Unsure about your exact skin condition?
              </span>
              <span className="text-xs text-[#554243]">
                Our certified dermatologist conducts in-depth digital dermoscopic analysis.
              </span>
            </div>
          </div>
          <button
            onClick={onBookClick}
            className="whitespace-nowrap px-4 py-2 rounded-full bg-white text-[#6a1528] hover:bg-[#6a1528] hover:text-white text-xs font-semibold border border-[#dbc0c2]/40 transition-colors shadow-xs cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
