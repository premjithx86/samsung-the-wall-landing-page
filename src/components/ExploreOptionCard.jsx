import { useState, useEffect, useRef } from 'react';

export default function ExploreOptionCard({ title, subtitle, image, index }) {
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

  if (index === 0) {
    // LEFT CARD: Larger image, content spacing as-is
    return (
      <div 
        ref={cardRef}
        className={`col-span-12 md:col-span-6 lg:col-span-7 flex flex-col items-center transition-all duration-[1200ms] ease-out transform ${
          hasEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.98]'
        }`}
      >
        {/* Immersive Widescreen Image Container */}
        <div className="w-full aspect-[16/9] overflow-hidden shadow-lg border border-gray-200/40 rounded-none cursor-pointer group mb-6 select-none relative">
          <img 
            src={image} 
            alt={`${title} ${subtitle}`} 
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
          />
        </div>

        {/* Card Content Block */}
        <div className="flex flex-col items-center w-full max-w-xl text-center">
          
          {/* Title & Subtitle */}
          <div className="space-y-1">
            <h4 className="heading-primary text-2xl font-bold text-[#1f2937]">
              {title}
            </h4>
            <h5 className="heading-secondary text-xl font-bold text-[#374151]">
              {subtitle}
            </h5>
          </div>

          {/* Details block */}
          <div className="mt-4 flex flex-col items-center w-full space-y-4">
            <div className="body-text text-xs sm:text-sm text-gray-500 space-y-1">
              <p>Speaker And Control Unit In-Built</p>
              <p className="mt-2">Variants Available:</p>
            </div>
            
            <div className="flex flex-col items-center justify-center mt-1 w-full px-4">
              <div className="body-text text-center text-xs sm:text-sm text-gray-500 leading-relaxed space-y-1">
                <p>A) 110 And 146 Inches In 2K Resolution</p>
                <p>B) 110 And 146 Inches In 4K Resolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={cardRef}
      className={`col-span-12 md:col-span-6 lg:col-span-5 flex flex-col items-center lg:pt-[179px] transition-all duration-[1200ms] ease-out transform ${
        hasEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.98]'
      }`}
    >
      {/* Slightly Smaller Curved Image Container matching Figma proportions */}
      <div className="w-[90%] sm:w-[86%] aspect-[16/9] mx-auto overflow-hidden shadow-lg border border-gray-200/40 rounded-none cursor-pointer group mb-3.5 select-none relative">
        <img 
          src={image} 
          alt={`${title} ${subtitle}`} 
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
        />
      </div>

      {/* Card Content Block: Tighter spacing between image and title */}
      <div className="flex flex-col items-center w-full max-w-xl text-center">
        
        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h4 className="heading-primary text-2xl font-bold text-[#1f2937]">
            {title}
          </h4>
          <h5 className="heading-secondary text-xl font-bold text-[#374151]">
            {subtitle}
          </h5>
        </div>

        {/* Details: Tighter spacing and closer alignment to title */}
        <div className="mt-3 flex flex-col items-center w-full space-y-2.5">
          <div className="body-text text-xs sm:text-sm text-gray-500 leading-relaxed">
            <p>Speaker And Control Unit Sold Seperately</p>
          </div>
          
          <div className="body-text text-center text-xs sm:text-sm text-gray-500 leading-relaxed space-y-0.5">
            <p>Started With 250" Can Be Expanded</p>
            <p>To Your Imagination</p>
          </div>
        </div>
      </div>
    </div>
  );
}
