import React from 'react';
import heroBg from '../assets/hero/4_rectangle.png';
import instagramIcon from '../assets/hero/35_vector.png';
import facebookIcon from '../assets/hero/36_vector.png';
import linkedinIcon from '../assets/hero/37_vector.png';

export default function Hero() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-white select-none overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>

      {/* Social Sidebar (Left aligned) */}
      <div className="absolute left-3 sm:left-6 md:left-10 top-0 bottom-0 flex flex-col items-center justify-center gap-6 sm:gap-8 z-20 pointer-events-none">
        <div className="w-[1px] h-20 sm:h-36 bg-white/15"></div>
        
        {/* Social Link Items */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pointer-events-auto opacity-75 hover:opacity-100 transition-opacity p-1.5"
        >
          <img 
            src={linkedinIcon} 
            alt="LinkedIn" 
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pointer-events-auto opacity-75 hover:opacity-100 transition-opacity p-1.5"
        >
          <img 
            src={facebookIcon} 
            alt="Facebook" 
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pointer-events-auto opacity-75 hover:opacity-100 transition-opacity p-1.5"
        >
          <img 
            src={instagramIcon} 
            alt="Instagram" 
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
        
        <div className="w-[1px] h-20 sm:h-36 bg-white/15"></div>
      </div>

      {/* Top Group: Title and Variants */}
      <div className="relative z-10 text-center w-full max-w-5xl px-6 pl-12 pr-6 sm:px-6 pt-10 sm:pt-20 md:pt-24 flex flex-col items-center gap-3 sm:gap-5">
        {/* Title */}
        <h1 
          className="heading-primary text-3xl sm:text-4xl md:text-6xl lg:text-[76px] xl:text-[84px] tracking-tight text-white/95 leading-none font-bold"
        >
          Samsung the Wall Series
        </h1>

        {/* Variants */}
        <div className="heading-secondary flex items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-sm md:text-base lg:text-[22px] font-medium tracking-wide text-white/90">
          <span>110 2K</span>
          <span className="h-4 w-[1.5px] bg-white/40"></span>
          <span>146 2K</span>
          <span className="h-4 w-[1.5px] bg-white/40"></span>
          <span>146 4K</span>
        </div>
      </div>

      {/* Center Spacer: allows the background skier to be fully visible and centered in composition */}
      <div className="flex-grow min-h-[40px] sm:min-h-[120px] md:min-h-[220px]"></div>

      {/* Bottom Group: Price block and Buy Now CTA */}
      <div className="relative z-10 text-center w-full max-w-4xl px-6 pl-12 pr-6 sm:px-6 flex flex-col items-center gap-4 sm:gap-6 mb-4 md:mb-10">
        <div 
          className="heading-secondary text-base sm:text-2xl md:text-3xl lg:text-[34px] text-white/90 flex items-center justify-center gap-2 sm:gap-4 font-medium"
        >
          <span className="opacity-90">Offer Price :</span>
          <span className="heading-primary text-xl sm:text-3xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-none">
            34,399 AED
          </span>
        </div>

        <a
          href="#specs"
          className="body-text px-10 py-2.5 sm:px-14 sm:py-3 text-xs sm:text-sm md:text-base font-medium tracking-wider rounded-full border border-white/80 hover:bg-white hover:text-gray-950 transition-all duration-300 bg-transparent text-white active:scale-95 text-center min-w-[150px] sm:min-w-[200px]"
        >
          Buy Now
        </a>
      </div>

      {/* Subtle Dark Gradient Overlay to improve bottom text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-0 pointer-events-none"></div>

      {/* Sub-footer Section Text */}
      <div className="relative z-10 pb-4 sm:pb-8 text-center px-6 pl-12 pr-6 sm:px-6">
        <span 
          className="body-text text-sm sm:text-lg lg:text-[22px] font-medium text-white tracking-wide block"
        >
          World's first MICROLED technology
        </span>
      </div>

    </section>
  );
}
