import React from 'react';
import heroBannerImage from '../assets/hero-banner.png';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick: _onBookClick,
  onExploreClick: _onExploreClick,
}) => {
  return (
    <section
      id="home"
      className="w-full max-w-none m-0 p-0 pt-[116px] sm:pt-[136px] bg-[#fff8f8] overflow-hidden"
      style={{ width: '100%', maxWidth: 'none', margin: 0, paddingBottom: 0 }}
    >
      {/* 
        Full-Width 16:9 Hero Wrapper:
        - Spans 100% of the viewport width from extreme left edge to extreme right edge
        - True 16/9 aspect-ratio
        - Zero white space, zero side gaps, zero margins, zero borders, zero padding
        - Image fills entire area seamlessly
      */}
      <div
        className="w-full max-w-none m-0 p-0 overflow-hidden relative block"
        style={{
          width: '100%',
          maxWidth: 'none',
          aspectRatio: '16 / 9',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src={heroBannerImage}
          alt="Rewrite Your Skin Story - Derma Remedy Skin, Hair & Laser Clinic Ashta"
          className="w-full h-full block object-cover select-none"
          loading="eager"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center center',
            margin: 0,
            padding: 0,
          }}
        />
      </div>
    </section>
  );
};
