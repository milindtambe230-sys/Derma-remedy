import React from 'react';
import { CLINIC_TREATMENTS, Treatment } from '../data/clinicData';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookClick: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onBookClick,
}) => {
  return (
    <section id="treatments" className="w-full py-16 sm:py-20 bg-[#fff0f3]/60 border-t border-[#dbc0c2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
              Specialized Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold mt-1">
              Comprehensive Treatments
            </h2>
            <p className="text-sm sm:text-base text-[#554243] mt-1.5 max-w-2xl">
              Medical precision, laser mastery, and therapeutic skin wellness under one roof.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#6a1528] font-semibold hover:text-[#4b0015] transition-colors self-start md:self-end cursor-pointer"
          >
            <span>View full service tariff</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* 10 Treatments Cards Grid + Promo Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CLINIC_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#dbc0c2]/30 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fbeaee] flex items-center justify-center text-[#6a1528] group-hover:bg-[#4b0015] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px]">{treatment.icon}</span>
                </div>
                <h3 className="font-serif text-xl text-[#4b0015] font-semibold mt-4">
                  {treatment.title}
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6a1528] block mt-0.5">
                  {treatment.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-[#554243] mt-2.5 leading-relaxed">
                  {treatment.description}
                </p>
              </div>

              <div className="pt-6 mt-2 border-t border-[#fbeaee] flex items-center justify-between">
                <button
                  onClick={() => onSelectTreatment(treatment)}
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#6a1528] font-bold hover:text-[#4b0015] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
                <span className="text-[11px] text-[#554243] font-medium">
                  {treatment.duration}
                </span>
              </div>
            </div>
          ))}

          {/* Integrated Multi-Treatment Approach Promo Card */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#4b0015] text-white shadow-xl sm:col-span-2 xl:col-span-2 border border-[#6a1528]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#ffb2ba] font-bold">
                Personalized Prescription
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-2 text-white">
                Need an integrated multi-treatment approach?
              </h3>
              <p className="text-xs sm:text-sm text-[#f5e4e8] mt-2.5 leading-relaxed max-w-xl">
                Most skin issues are multifaceted. We formulate synchronized protocols combining medical facials, topical prescriptions, and laser resurfacing for accelerated visible results.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#4b0015] text-xs uppercase tracking-wider font-semibold hover:bg-[#fbeaee] transition-colors shadow-md cursor-pointer"
              >
                <span>Book Comprehensive Consult</span>
              </button>
              <a
                href="tel:09225118946"
                className="inline-flex items-center gap-1.5 text-xs text-[#ffb2ba] hover:text-white transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Direct Clinic Line: 092251 18946</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
