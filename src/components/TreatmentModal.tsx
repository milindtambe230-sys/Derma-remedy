import React from 'react';
import { Treatment } from '../data/clinicData';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentTitle: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#dbc0c2]/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fbeaee] text-[#4b0015] hover:bg-[#6a1528] hover:text-white transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#fbeaee] flex items-center justify-center text-[#6a1528] shrink-0">
            <span className="material-symbols-outlined text-[26px]">{treatment.icon}</span>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#6a1528] font-bold">
              {treatment.subtitle}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#4b0015]">
              {treatment.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#554243] leading-relaxed mb-6">
          {treatment.description}
        </p>

        {/* Clinical Specs */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#fff0f3] border border-[#dbc0c2]/30 mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#554243] font-semibold">
              Session Time
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#4b0015] mt-0.5">
              {treatment.duration}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#554243] font-semibold">
              Recommended
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#4b0015] mt-0.5">
              {treatment.sessions}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#554243] font-semibold">
              Downtime
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#4b0015] mt-0.5">
              {treatment.downtime}
            </span>
          </div>
        </div>

        {/* Benefits list */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-[#22191c] font-bold mb-3">
            Expected Clinical Benefits:
          </h4>
          <ul className="space-y-2">
            {treatment.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#554243]">
                <span className="material-symbols-outlined text-[16px] text-[#6a1528] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => {
              onBookTreatment(treatment.title);
              onClose();
            }}
            className="flex-1 py-3 rounded-full bg-[#6a1528] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-[#4b0015] transition-colors text-center cursor-pointer"
          >
            Book Consultation
          </button>
          <a
            href="tel:09225118946"
            className="px-5 py-3 rounded-full bg-[#fbeaee] hover:bg-[#f5e4e8] text-[#4b0015] font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="hidden sm:inline">Call Clinic</span>
          </a>
        </div>
      </div>
    </div>
  );
};
