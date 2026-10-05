import React from 'react';

export const TrustRow: React.FC = () => {
  const highlights = [
    {
      icon: 'assignment_ind',
      title: 'Personalized Plans',
      desc: 'Diagnostic mapping tailored strictly to your biological skin profile.'
    },
    {
      icon: 'biotech',
      title: 'Advanced Technology',
      desc: 'US-FDA approved laser workstations & medical-grade devices.'
    },
    {
      icon: 'health_and_safety',
      title: 'Safe & Effective',
      desc: 'Evidence-based clinical guidelines with zero unnecessary downtime.'
    },
    {
      icon: 'support_agent',
      title: 'Expert Care & Support',
      desc: 'Continuous follow-up tracking from initial consult to full healing.'
    }
  ];

  return (
    <section className="w-full bg-[#fff0f3] py-10 sm:py-12 border-y border-[#dbc0c2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#dbc0c2]/30 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fbeaee] flex items-center justify-center shrink-0 text-[#6a1528]">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif text-lg text-[#4b0015] font-semibold">{item.title}</h3>
                <p className="text-xs text-[#554243] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
