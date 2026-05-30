import React, { useState, useEffect, useRef } from 'react';

export default function ApplicationSection({ title, description, image, index, total }) {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={index === 0 ? "applications" : undefined}
      className={`relative w-full h-[480px] sm:h-[620px] lg:h-[720px] overflow-hidden group cursor-pointer select-none transition-all duration-[1200ms] ease-out transform ${
        hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Immersive Background Image with slight hover scale */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
      />

      {/* Left Gradient Overlay to maintain readable contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:from-black/80"></div>

      {/* Top-Left Content: Title & Description */}
      <div className="absolute top-10 sm:top-16 left-8 sm:left-16 md:left-24 z-20 text-left max-w-sm sm:max-w-md md:max-w-xl space-y-3 sm:space-y-4">
        <h3 
          className="heading-primary text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none"
        >
          {title}
        </h3>
        <p className="body-text text-[11px] sm:text-xs md:text-[13px] text-white/60 font-light leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom-Left Content: Sharp Rectangular Download Button */}
      <div className="absolute bottom-10 sm:bottom-16 left-8 sm:left-16 md:left-24 z-20">
        <a
          href="#download"
          className="body-text inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-semibold tracking-wider text-white border border-white/40 bg-transparent hover:bg-white hover:text-black rounded-none transition-all duration-300 active:scale-95 group/btn"
        >
          {/* Download Tray Arrow Icon */}
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

      {/* Bottom Center Content: Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-3 pointer-events-none">
        {Array.from({ length: total }).map((_, dotIdx) => (
          <span
            key={dotIdx}
            className={`h-2 w-2 rounded-full transition-all duration-300 ease-out border ${
              dotIdx === index 
                ? 'bg-white border-white' 
                : 'bg-transparent border-white/50'
            }`}
          ></span>
        ))}
      </div>

    </section>
  );
}
