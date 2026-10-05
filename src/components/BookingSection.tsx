import React, { useState } from 'react';

interface BookingSectionProps {
  selectedConcern?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedConcern = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: selectedConcern || 'acne',
    date: '',
    time: 'morning',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = 'DR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refNum);
    setSubmitted(true);
  };

  return (
    <section id="appointment-booking" className="w-full py-16 sm:py-20 bg-[#fff0f3] border-t border-[#dbc0c2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: CTA & Clinic Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
                Priority Reservation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold leading-tight">
                Ready to Rewrite Your <br className="hidden sm:inline" />
                <span className="font-normal italic">Skin Story?</span>
              </h2>
              <p className="text-sm sm:text-base text-[#554243] leading-relaxed">
                Book your private consultation with our dermatologist. We ensure dedicated one-on-one attention without rushing, giving your skin the meticulous diagnostic focus it deserves.
              </p>

              {/* Quick Contacts Box */}
              <div className="mt-4 flex flex-col gap-4 p-5 rounded-2xl bg-white border border-[#dbc0c2]/30 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#fbeaee] flex items-center justify-center text-[#6a1528] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#554243]">Direct Appointment Desk</span>
                    <a
                      href="tel:09225118946"
                      className="font-serif text-lg font-semibold text-[#4b0015] hover:text-[#6a1528] transition-colors"
                    >
                      092251 18946
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#fbeaee] flex items-center justify-center text-[#6a1528] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#554243]">Consultation Hours</span>
                    <span className="text-sm font-medium text-[#22191c]">
                      Open Mon – Sun until 8:00 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#fbeaee] flex items-center justify-center text-[#6a1528] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">security</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#554243]">Confidential Care</span>
                    <span className="text-sm text-[#22191c]">Strict patient discretion &amp; records privacy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs text-[#554243] font-medium">
                डर्मा रेमेडी स्किन • हेअर • लेझर क्लिनिक • आष्टा
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#dbc0c2]/30 shadow-xl">
              <h3 className="font-serif text-2xl font-semibold text-[#4b0015] mb-1">
                Schedule Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#554243] mb-6">
                Fill out the details below and our clinic reception will confirm your slot via call or WhatsApp.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#fbeaee] border border-[#dbc0c2]/50 text-[#4b0015] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[32px] text-[#6a1528]">
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-serif text-xl font-bold">Appointment Request Confirmed!</h4>
                      <p className="text-xs text-[#554243]">
                        Reference ID: <strong className="text-[#4b0015]">{bookingRef}</strong>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#554243] leading-relaxed">
                    Thank you, <strong className="text-[#22191c]">{formData.name}</strong>. Our clinic coordinator will call you from{' '}
                    <strong className="text-[#6a1528]">092251 18946</strong> within 1 business hour to finalize your time slot.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        concern: 'acne',
                        date: '',
                        time: 'morning',
                        notes: ''
                      });
                    }}
                    className="self-start px-5 py-2 rounded-full bg-[#6a1528] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#4b0015] transition-colors"
                  >
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs uppercase tracking-wider text-[#22191c] font-semibold">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Shraddheya Patil"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f8] text-[#22191c] placeholder:text-[#554243]/50 text-sm border border-[#dbc0c2]/40 focus:outline-none focus:ring-2 focus:ring-[#6a1528]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#22191c] font-semibold">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 092251 18946"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f8] text-[#22191c] placeholder:text-[#554243]/50 text-sm border border-[#dbc0c2]/40 focus:outline-none focus:ring-2 focus:ring-[#6a1528]"
                    />
                  </div>

                  {/* Primary Concern */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#22191c] font-semibold">
                      Primary Concern *
                    </label>
                    <select
                      name="concern"
                      required
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f8] text-[#22191c] text-sm border border-[#dbc0c2]/40 focus:outline-none focus:ring-2 focus:ring-[#6a1528]"
                    >
                      <option value="acne">Acne &amp; Active Pimples</option>
                      <option value="pigmentation">Pigmentation &amp; Melasma</option>
                      <option value="darkspots">Dark Spots (PIH)</option>
                      <option value="scars">Acne Scar Laser Therapy</option>
                      <option value="wrinkles">Anti-Aging &amp; Wrinkles</option>
                      <option value="darkcircles">Dark Circles &amp; Fatigue</option>
                      <option value="pores">Enlarged Pores (Carbon Laser)</option>
                      <option value="hairfall">Hair Fall &amp; Scalp PRP</option>
                      <option value="laser">Laser Hair Reduction</option>
                      <option value="other">General Dermatology Consult</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#22191c] font-semibold">
                      Preferred Date *
                    </label>
                    <input
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f8] text-[#22191c] text-sm border border-[#dbc0c2]/40 focus:outline-none focus:ring-2 focus:ring-[#6a1528]"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#22191c] font-semibold">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f8] text-[#22191c] text-sm border border-[#dbc0c2]/40 focus:outline-none focus:ring-2 focus:ring-[#6a1528]"
                    >
                      <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM – 8:00 PM)</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs uppercase tracking-wider text-[#22191c] font-semibold">
                      Brief Notes / Previous Treatments (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us if you have tried any topical creams or have specific concerns..."
                      className="w-full px-4 py-2 rounded-xl bg-[#fff8f8] text-[#22191c] placeholder:text-[#554243]/50 text-sm border border-[#dbc0c2]/40 focus:outline-none focus:ring-2 focus:ring-[#6a1528]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#6a1528] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg hover:bg-[#4b0015] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>Confirm Appointment Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
