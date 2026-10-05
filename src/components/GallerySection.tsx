import React, { useState } from 'react';
import { CLINIC_GALLERY, GalleryItem } from '../data/clinicData';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="w-full py-16 sm:py-20 bg-[#fff0f3]/40 border-t border-[#dbc0c2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
              Walkthrough
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold mt-1">
              Inside Derma Remedy
            </h2>
            <p className="text-sm sm:text-base text-[#554243] mt-1 max-w-2xl">
              Tour our serene clinical spaces, laser treatment suites, and private consultation lounges in Ashta.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#fbeaee] text-[#4b0015] text-xs font-semibold border border-[#dbc0c2]/30">
              Sterile Medical Grade
            </span>
            <span className="px-3 py-1 rounded-full bg-[#fbeaee] text-[#4b0015] text-xs font-semibold border border-[#dbc0c2]/30">
              Ultra Private
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CLINIC_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-[#dbc0c2]/30 bg-[#fbeaee] ${item.aspectClass}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4b0015]/85 via-[#4b0015]/25 to-transparent flex flex-col justify-end p-5 text-white transition-opacity">
                <span className="text-[11px] uppercase tracking-wider text-[#ffb2ba] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-medium mt-0.5">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="p-5 flex items-center justify-between bg-white border-t border-[#dbc0c2]/20">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#6a1528] font-bold">
                    {activeItem.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#4b0015]">
                    {activeItem.title}
                  </h3>
                </div>
                <span className="text-xs text-[#554243]">Derma Remedy Ashta</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
