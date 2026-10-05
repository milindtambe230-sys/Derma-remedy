import React from 'react';
import { LOGO_URL } from '../data/clinicData';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  return (
    <footer className="w-full bg-[#fff0f3] border-t border-[#dbc0c2]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Derma Remedy Brand Logo"
                className="h-10 sm:h-12 w-auto object-contain block"
              />
              <span className="font-serif text-xl text-[#4b0015] font-bold">
                Derma Remedy
              </span>
            </div>
            <p className="text-[11px] tracking-wider text-[#554243] uppercase font-semibold">
              डर्मा रेमेडी स्किन • हेअर • लेझर क्लिनिक
            </p>
            <p className="text-xs sm:text-sm text-[#554243] leading-relaxed mt-1">
              An ultra-refined medical clinic in Ashta dedicated to world-class clinical dermatology, bespoke hair revitalization, and scientific aesthetic laser therapies.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#6a1528]">
              <a
                href="tel:09225118946"
                className="w-9 h-9 rounded-full bg-[#fbeaee] hover:bg-[#6a1528] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                title="Phone"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-full bg-[#fbeaee] hover:bg-[#6a1528] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                title="Clinic Location"
              >
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </a>
              <a
                href="#reviews"
                className="w-9 h-9 rounded-full bg-[#fbeaee] hover:bg-[#6a1528] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                title="Reviews"
              >
                <span className="material-symbols-outlined text-[18px]">star</span>
              </a>
            </div>
          </div>

          {/* Clinical Offerings */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-base text-[#4b0015] font-semibold">
              Clinical Offerings
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#554243]">
              <li>
                <a href="#treatments" className="hover:text-[#4b0015] transition-colors">
                  Medical Dermatology
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#4b0015] transition-colors">
                  Advanced Laser Resurfacing
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#4b0015] transition-colors">
                  Hair PRP &amp; Scalp Restoration
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#4b0015] transition-colors">
                  Pigmentation &amp; Melasma Therapy
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#4b0015] transition-colors">
                  Acne Scar Reconstruction
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#4b0015] transition-colors">
                  Medi-Facials &amp; Glow Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-serif text-base text-[#4b0015] font-semibold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#554243]">
              <li>
                <a href="#about" className="hover:text-[#4b0015] transition-colors">
                  About Clinic
                </a>
              </li>
              <li>
                <a href="#patient-journey" className="hover:text-[#4b0015] transition-colors">
                  Patient Care Journey
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#4b0015] transition-colors">
                  Patient Stories
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#4b0015] transition-colors">
                  Clinical Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#4b0015] transition-colors">
                  Directions &amp; Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="hover:text-[#4b0015] font-semibold text-[#6a1528] text-left transition-colors cursor-pointer"
                >
                  Online Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-base text-[#4b0015] font-semibold">
              Visit Us
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#554243] leading-relaxed">
              <span className="material-symbols-outlined text-[18px] text-[#6a1528] mt-0.5 shrink-0">
                pin_drop
              </span>
              <span>
                Ground Floor, Mirajkar Eye Hospital, Behind Aishwarya Petrol Pump, Amruta Awati, Ashta, Maharashtra 416301
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#554243]">
              <span className="material-symbols-outlined text-[18px] text-[#6a1528] shrink-0">
                call
              </span>
              <a href="tel:09225118946" className="hover:text-[#4b0015] font-semibold">
                092251 18946
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#554243]">
              <span className="material-symbols-outlined text-[18px] text-[#6a1528] shrink-0">
                event_available
              </span>
              <span>Mon – Sun: 10:00 AM – 8:00 PM</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#dbc0c2]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#554243]">
          <p>© 2026 Derma Remedy Skin | Hair | Laser Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#appointment-booking" className="hover:text-[#4b0015] transition-colors">
              Privacy Policy
            </a>
            <a href="#appointment-booking" className="hover:text-[#4b0015] transition-colors">
              Terms of Consultation
            </a>
            <a href="#contact" className="hover:text-[#4b0015] transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
