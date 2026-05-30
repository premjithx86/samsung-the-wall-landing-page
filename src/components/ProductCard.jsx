import React, { useState, useEffect, useRef } from 'react';

export default function ProductCard({ title, image }) {
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
      className={`flex flex-col items-center justify-between text-center p-6 sm:p-8 bg-transparent transition-all duration-[1200ms] ease-out transform ${
        hasEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.98]'
      }`}
    >
      {/* Product Image Container with Zoom effect */}
      <div className="w-full max-w-[260px] aspect-[4/3] flex items-center justify-center overflow-hidden cursor-pointer group mb-6 select-none">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
        />
      </div>

      {/* Product Title and Button Container */}
      <div className="flex flex-col items-center justify-end flex-1 space-y-4">
        {/* Title */}
        <h4 
          className="heading-primary text-xs sm:text-[13px] md:text-sm font-bold text-gray-800 leading-relaxed max-w-[200px] sm:max-w-[220px]"
        >
          {title}
        </h4>

        {/* Buy Now Button (Sharp rectangular border outline) */}
        <div className="pt-1">
          <a
            href="#buy"
            className="body-text inline-flex items-center justify-center px-8 py-2 text-xs font-bold tracking-wider text-gray-700 hover:text-white border border-gray-300 hover:border-gray-800 bg-transparent hover:bg-gray-800 rounded-none transition-all duration-300 active:scale-95 whitespace-nowrap min-w-[120px]"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
