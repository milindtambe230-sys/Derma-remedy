import React from 'react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      num: 'Pillar 01',
      title: 'Personalized Care',
      icon: 'medical_services',
      desc: 'We listen with empathy. Your treatment starts with listening to your history, dietary routines, and emotional concerns about your skin health.'
    },
    {
      num: 'Pillar 02',
      title: 'Modern Approach',
      icon: 'science',
      desc: 'We replace outdated abrasive methods with fractional lasers, targeted peeling, and cellular micro-needling for gentle yet enduring transformations.'
    },
    {
      num: 'Pillar 03',
      title: 'Patient-Centered Experience',
      icon: 'favorite',
      desc: 'From our soothing consultation suites to prompt appointment scheduling, your comfort and peace of mind guide our entire workflow.'
    },
    {
      num: 'Pillar 04',
      title: 'Complete Care',
      icon: 'all_inclusive',
      desc: 'We look after both internal dermatology and external aesthetics, supplying comprehensive home skincare routines alongside clinical sessions.'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-[#fff0f3] border-t border-[#dbc0c2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
            The Derma Remedy Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold mt-1.5">
            Why Patients Choose Derma Remedy
          </h2>
          <p className="text-sm sm:text-base text-[#554243] mt-2">
            Combining deep medical dermatology with therapeutic rejuvenation in a calm, welcoming environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-6 rounded-2xl bg-white border border-[#dbc0c2]/30 shadow-xs flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fbeaee] flex items-center justify-center text-[#6a1528] mb-4">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#4b0015]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#554243] mt-2.5 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-[#6a1528] font-bold pt-6 border-t border-[#fbeaee] mt-4 block">
                {pillar.num}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
