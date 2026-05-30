import React, { useState, useEffect, useRef } from 'react';

export default function OptionCard({ title, description, image, reverse }) {
  const [hasEntered, setHasEntered] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer scroll entrance trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="w-full py-10 sm:py-14 md:py-16 px-6 md:px-16 lg:px-24"
    >
      <div 
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center w-full transition-all duration-[1200ms] ease-out transform ${
          hasEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.99]'
        }`}
      >
        
        {/* Dynamic Image Container (Always renders first on mobile, alternates order on desktop) */}
        <div className={`w-full overflow-hidden rounded-xl border border-gray-200/60 shadow-md group cursor-pointer ${
          reverse ? 'lg:order-2' : 'lg:order-1'
        }`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-cover block transition-transform duration-1000 ease-out group-hover:scale-[1.018]"
          />
        </div>

        {/* Dynamic Text Description & Action Container */}
        <div className={`flex flex-col items-start text-left space-y-4 md:space-y-5 ${
          reverse ? 'lg:order-1' : 'lg:order-2'
        }`}>
          {/* Header Title */}
          <h3 
            className="heading-primary text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
          >
            {title}
          </h3>

          {/* Description Text */}
          <p className="body-text text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>

          {/* Download Brochure Action Button (Sharp rectangle border outline) */}
          <div className="pt-2">
            <a
              href="#download"
              className="body-text inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-bold tracking-wider text-gray-800 border border-gray-300 hover:border-gray-500 bg-transparent hover:bg-gray-50 rounded-none transition-all duration-300 active:scale-95 group/btn"
            >
              {/* Download Arrow Icon */}
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-y-[2px]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
