import React, { useState } from 'react';
import logoTransparent from '../assets/logo-transparent.png';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Skin Concerns', href: '#skin-concerns' },
    { label: 'Patient Journey', href: '#patient-journey' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#f5e4e8]/95 backdrop-blur-md border-b border-[#dbc0c2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between text-xs tracking-wider">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1 text-[#554243]">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="material-symbols-outlined text-[15px] text-[#6a1528]">schedule</span>
              <span>Open today until 8 PM</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              <span className="material-symbols-outlined text-[15px] text-[#6a1528]">verified</span>
              <span>★ 5.0 (3 Reviews) on Google</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 shrink-0">
              <span className="material-symbols-outlined text-[15px] text-[#6a1528]">location_on</span>
              <span>Ashta, Maharashtra</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:09225118946"
              className="flex items-center gap-1 text-[#6a1528] hover:text-[#4b0015] font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              <span className="tracking-normal font-sans">092251 18946</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#fff8f8]/95 backdrop-blur-xl shadow-[0_2px_16px_rgba(75,0,21,0.06)] border-b border-[#dbc0c2]/20">
        <div className="h-22 sm:h-24 lg:h-26 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-6">
          {/* Transparent Brand Logo: Large, Sharp & Proportional */}
          <a
            href="#home"
            className="flex items-center shrink-0 py-1 group focus-visible:outline-none"
            aria-label="Derma Remedy Home"
          >
            <img
              src={logoTransparent}
              alt="Derma Remedy - Reveal Restore Radiate"
              className="h-[50px] sm:h-[68px] lg:h-[80px] w-auto max-w-full object-contain block transition-transform group-hover:scale-[1.02]"
              style={{
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
              loading="eager"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#554243] hover:text-[#4b0015] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6a1528] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#6a1528] text-white text-xs uppercase tracking-wider font-semibold shadow-[0_4px_16px_rgba(106,21,40,0.25)] hover:bg-[#4b0015] hover:shadow-[0_6px_20px_rgba(106,21,40,0.35)] transition-all cursor-pointer"
            >
              <span>Book Appointment</span>
            </button>

            {/* Direct Phone / Call Icon for quick access */}
            <a
              href="tel:09225118946"
              className="w-9 h-9 rounded-full bg-[#fbeaee] text-[#6a1528] hover:bg-[#6a1528] hover:text-white transition-colors flex items-center justify-center shadow-sm"
              title="Call Clinic Reception"
            >
              <span className="material-symbols-outlined text-[19px]">call</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded-full bg-[#fbeaee] text-[#4b0015] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#fff8f8] border-b border-[#dbc0c2]/40 px-6 py-4 shadow-xl transition-all">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-[#22191c] hover:text-[#6a1528] py-2 border-b border-[#fbeaee] font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3 rounded-full bg-[#6a1528] text-white text-center font-semibold text-sm uppercase tracking-wider shadow-md"
                >
                  Book an Appointment
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
