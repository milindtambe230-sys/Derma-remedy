import React from 'react';
import { MAP_IMAGE_URL } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-16 sm:py-20 bg-[#fff8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
            Visit Derma Remedy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold mt-1.5">
            Location &amp; Hours
          </h2>
          <p className="text-sm sm:text-base text-[#554243] mt-2">
            Conveniently accessible in Ashta with dedicated parking and modern clinic infrastructure.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fff0f3] border border-[#dbc0c2]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#fbeaee] flex items-center justify-center text-[#6a1528] mb-4">
                <span className="material-symbols-outlined text-[26px]">pin_drop</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#4b0015]">Clinic Address</h3>
              <p className="text-xs sm:text-sm text-[#554243] mt-2.5 leading-relaxed">
                Ground Floor, Mirajkar Eye Hospital,<br />
                Behind Aishwarya Petrol Pump,<br />
                Amruta Awati, Ashta, Maharashtra 416301
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#dbc0c2]/30">
              <a
                href="https://maps.google.com/?q=Mirajkar+Eye+Hospital+Behind+Aishwarya+Petrol+Pump+Ashta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#6a1528] font-bold hover:text-[#4b0015] transition-colors"
              >
                <span>Get Directions on Map</span>
                <span className="material-symbols-outlined text-[15px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Phone & Direct Lines */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fff0f3] border border-[#dbc0c2]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#fbeaee] flex items-center justify-center text-[#6a1528] mb-4">
                <span className="material-symbols-outlined text-[26px]">ring_volume</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#4b0015]">Contact &amp; Support</h3>
              <p className="text-xs sm:text-sm text-[#554243] mt-2.5 leading-relaxed">
                Appointments &amp; Inquiries: <br />
                <strong className="text-[#4b0015] font-serif text-base">092251 18946</strong><br />
                Walk-in consultations welcome according to doctor schedule.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#dbc0c2]/30">
              <a
                href="tel:09225118946"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#6a1528] font-bold hover:text-[#4b0015] transition-colors"
              >
                <span>Call Now</span>
                <span className="material-symbols-outlined text-[15px]">call</span>
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fff0f3] border border-[#dbc0c2]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#fbeaee] flex items-center justify-center text-[#6a1528] mb-4">
                <span className="material-symbols-outlined text-[26px]">alarm_on</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#4b0015]">Working Hours</h3>
              <p className="text-xs sm:text-sm text-[#554243] mt-2.5 leading-relaxed">
                Monday – Sunday: <strong className="text-[#22191c]">10:00 AM – 8:00 PM</strong><br />
                Evening laser &amp; facial slots available until 7:30 PM by prior appointment.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#dbc0c2]/30">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#4b0015] text-xs font-semibold border border-[#dbc0c2]/40">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Open Today</span>
              </span>
            </div>
          </div>

        </div>

        {/* Static Map Card */}
        <div className="mt-8 rounded-3xl overflow-hidden shadow-md border border-[#dbc0c2]/40">
          <a
            href="https://maps.google.com/?q=Mirajkar+Eye+Hospital+Behind+Aishwarya+Petrol+Pump+Ashta"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group overflow-hidden"
          >
            <img
              src={MAP_IMAGE_URL}
              alt="Map location of Derma Remedy in Ashta, Maharashtra"
              className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#4b0015]/10 group-hover:bg-[#4b0015]/20 transition-colors flex items-center justify-center">
              <span className="px-5 py-2.5 rounded-full bg-white/95 text-[#4b0015] font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 group-hover:bg-[#6a1528] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>Open in Google Maps</span>
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
