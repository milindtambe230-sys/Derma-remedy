import React from 'react';

export const JourneySection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'A comprehensive, one-on-one discussion of your aesthetic goals, medical background, current skincare products, and chief skin concerns.',
      tag: '30-45 Mins Dedicated',
      icon: 'forum'
    },
    {
      num: '02',
      title: 'Skin Assessment',
      desc: 'Clinical dermoscopy and deep-layer epidermal evaluation to determine moisture balance, melanin concentration, sebum levels, and pore health.',
      tag: 'Scientific Diagnostics',
      icon: 'search_check'
    },
    {
      num: '03',
      title: 'Treatment Plan',
      desc: 'We map out a clear roadmap featuring laser parameters, in-clinic peeling, medical therapies, and a simplified daily skincare regimen.',
      tag: 'Customized Protocol',
      icon: 'draw'
    },
    {
      num: '04',
      title: 'Follow-Up & Care',
      desc: 'Post-treatment checks, progress photography, and continuous adjustments ensure sustained results without relapse.',
      tag: 'Long-term Skin Health',
      icon: 'verified'
    }
  ];

  return (
    <section id="patient-journey" className="w-full py-16 sm:py-20 bg-[#fff8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-[#6a1528] font-bold">
            Step-by-Step Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4b0015] font-bold mt-1.5">
            Your Patient Care Journey
          </h2>
          <p className="text-sm sm:text-base text-[#554243] mt-2">
            Predictable, structured, and compassionate steps to renew your skin’s innate health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-[#fff0f3] border border-[#dbc0c2]/30 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="font-serif text-4xl sm:text-5xl text-[#4b0015]/20 font-bold leading-none mb-3 group-hover:text-[#6a1528]/40 transition-colors">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#4b0015]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#554243] mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#dbc0c2]/30 flex items-center gap-1.5 text-[#6a1528] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">{step.icon}</span>
                <span>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
