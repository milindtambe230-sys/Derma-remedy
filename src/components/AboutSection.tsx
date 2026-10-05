import React from 'react';
import { ABOUT_IMAGE_URL } from '../data/clinicData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 sm:py-20 bg-[#fff8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Clinic Photo with Brand Plaque */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white p-2.5 border border-[#dbc0c2]/30">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#fbeaee]">
                <img
                  src={ABOUT_IMAGE_URL}
                  alt="Archana Sunil Maskepatil - Derma Remedy Skin, Hair & Laser Clinic"
                  className="w-full h-full object-cover object-center block"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Experience Plaque */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#dbc0c2]/40 shadow-xl max-w-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#6a1528] text-white flex items-center justify-center shrink-0 font-serif text-xl font-bold">
                DR
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-[#4b0015] leading-tight">
                  Archana Sunil Maskepatil.
                </span>
              </div>
            </div>
          </div>

          {/* About Clinic Text */}
          <div className="lg:col-span-6 flex flex-col gap-5 pt-4 lg:pt-0">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
                About
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold mt-1.5 leading-tight">
                Elevating Clinical Care <br />
                <span className="font-normal italic">with Uncompromised Aesthetics</span>
              </h2>
            </div>

            <p className="text-[#554243] text-sm sm:text-base leading-relaxed">
              Derma Remedy is a skin, hair and laser clinic located in Ashta, Maharashtra. We focus on personalized care and modern dermatology solutions designed to help you achieve healthier, clearer and more confident skin.
            </p>

            <p className="text-[#554243] text-xs sm:text-sm leading-relaxed">
              Founded with the philosophy that advanced dermatological technology should be paired with warm, discreet, patient-centered hospitality, our clinic offers world-standard solutions previously accessible only in metro medical centers.
            </p>

            {/* 3 Highlight Points */}
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#fbeaee] flex items-center justify-center text-[#6a1528] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-[#22191c]">Modern Technology</h4>
                  <p className="text-xs text-[#554243] mt-0.5">
                    Calibrated laser wavelengths and sterile diagnostic microscopes ensure maximum efficacy and rapid recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#fbeaee] flex items-center justify-center text-[#6a1528] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">person_heart</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-[#22191c]">Personalized Care</h4>
                  <p className="text-xs text-[#554243] mt-0.5">
                    No blanket regimens. Every recommendation respects your skin’s uniqueness, lifestyle, and hormonal timeline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#fbeaee] flex items-center justify-center text-[#6a1528] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-[#22191c]">Safe &amp; Effective Treatment</h4>
                  <p className="text-xs text-[#554243] mt-0.5">
                    Zero compromise on patient safety protocols, disposable consumables, and clinically proven pharmaceuticals.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
