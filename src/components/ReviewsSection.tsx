import React from 'react';
import { CLINIC_REVIEWS } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="w-full py-16 sm:py-20 bg-[#fff8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ratings Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-[#fff0f3] border border-[#dbc0c2]/30 shadow-xs mb-10 gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xs text-[#4b0015] border border-[#dbc0c2]/30">
              <span className="material-symbols-outlined text-[36px]">reviews</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-bold text-[#4b0015]">5.0</span>
                <div className="flex text-amber-500 text-lg">★★★★★</div>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#554243] font-semibold">
                Google Business Profile Rating
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#4b0015] text-xs sm:text-sm font-semibold shadow-xs border border-[#dbc0c2]/30">
            <span className="material-symbols-outlined text-[#6a1528] text-[18px]">verified</span>
            <span>100% Verified Google Reviews • Ashta</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dbc0c2]/30 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 text-sm">★★★★★</div>
                  <div className="flex items-center gap-1 text-xs text-[#554243] font-medium">
                    <span className="material-symbols-outlined text-[15px] text-[#6a1528]">verified</span>
                    <span>Verified Patient</span>
                  </div>
                </div>
                <p className="text-[#22191c] text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#fbeaee] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fbeaee] text-[#6a1528] font-serif text-base font-bold flex items-center justify-center shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-[#4b0015]">{review.name}</h4>
                  <span className="text-xs text-[#554243]">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
