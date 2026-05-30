import React, { useState, useEffect, useRef } from 'react';

export default function TechnologySection({ title, description, image, animationType }) {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger entrance animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --- Animation Type 4: Draggable Image Comparison Slider Logic ---
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 - 100)
  const sliderContainerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const handleSliderMove = (clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const onMouseDown = () => { isDraggingRef.current = true; };
  const onTouchStart = () => { isDraggingRef.current = true; };

  // Connect global window mousemove/mouseup to guarantee seamless dragging across boundaries
  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDraggingRef.current) return;
      // Handle touch move
      if (e.type === 'touchmove') {
        if (e.touches && e.touches[0]) {
          handleSliderMove(e.touches[0].clientX);
        }
      } else {
        // Handle mouse move
        handleSliderMove(e.clientX);
      }
    };

    const handleGlobalRelease = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalRelease);
    window.addEventListener('touchmove', handleGlobalMove, { passive: true });
    window.addEventListener('touchend', handleGlobalRelease);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalRelease);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalRelease);
    };
  }, []);

  // Render correct animation layout wrapper
  const renderVisual = () => {
    switch (animationType) {
      case 'fade':
        return (
          <div 
            className={`w-full transition-all duration-[1200ms] ease-out transform ${
              hasEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.98]'
            }`}
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover block mx-auto"
            />
          </div>
        );

      case 'colorReveal':
        return (
          <div 
            className={`w-full transition-all duration-[1500ms] ease-out transform ${
              hasEntered ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
            }`}
          >
            <img 
              src={image} 
              alt={title} 
              className={`w-full h-auto object-cover block mx-auto transition-all duration-[1200ms] ${
                hasEntered ? 'saturate-100 brightness-100' : 'saturate-[0.1] brightness-[0.45]'
              }`}
            />
          </div>
        );

      case 'panelReveal':
        return (
          <div className="relative w-full overflow-hidden select-none bg-black">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover block mx-auto"
            />
            {/* Sliding vertical curtain panels overlay */}
            <div className="absolute inset-0 flex pointer-events-none">
              <div 
                className={`h-full bg-black transition-transform duration-700 ease-out origin-right w-1/3 ${
                  hasEntered ? 'scale-x-0' : 'scale-x-100'
                }`}
                style={{ transitionDelay: '150ms' }}
              ></div>
              <div 
                className={`h-full bg-black transition-transform duration-700 ease-out origin-right w-1/3 ${
                  hasEntered ? 'scale-x-0' : 'scale-x-100'
                }`}
                style={{ transitionDelay: '350ms' }}
              ></div>
              <div 
                className={`h-full bg-black transition-transform duration-700 ease-out origin-right w-1/3 ${
                  hasEntered ? 'scale-x-0' : 'scale-x-100'
                }`}
                style={{ transitionDelay: '550ms' }}
              ></div>
            </div>
          </div>
        );

      case 'comparisonSlider':
        return (
          <div 
            ref={sliderContainerRef}
            className="relative w-full cursor-ew-resize overflow-hidden bg-black select-none"
            onMouseMove={(e) => { if (isDraggingRef.current) handleSliderMove(e.clientX); }}
          >
            {/* Left Image: Original */}
            <img 
              src={image} 
              alt={`${title} - Enhanced`} 
              className="w-full h-auto object-cover block pointer-events-none mx-auto"
            />

            {/* Right Image: Blurred (clipped via dynamic polygon based on slider position) */}
            <div 
              className="absolute inset-0 select-none pointer-events-none overflow-hidden"
              style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
            >
              <img 
                src={image} 
                alt={`${title} - Original`} 
                className="w-full h-full object-cover filter blur-[12px] scale-[1.03] saturate-[0.8] brightness-[0.7] block mx-auto"
              />
            </div>

            {/* Draggable Vertical Slider Handle Line */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white/70 z-30 flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
              onMouseDown={(e) => { e.preventDefault(); onMouseDown(); }}
              onTouchStart={onTouchStart}
            >
              {/* Sleek comparison knob */}
              <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-900 border border-gray-200 pointer-events-none hover:scale-105 active:scale-95 transition-transform">
                <svg className="w-4 h-4 transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 4 4 4m8 0l4-4-4-4" />
                </svg>
              </div>
            </div>
          </div>
        );

      default:
        return <img src={image} alt={title} className="w-full h-auto block mx-auto" />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-black py-20 px-4 md:px-0 w-full flex flex-col items-center select-none"
    >
      {/* Immersive Responsive Container (90% width, max 1400px, sharp corners) */}
      <div className="w-[90vw] max-w-[1400px] flex flex-col items-center">
        
        {/* Text Content Block - Rendered ABOVE the image container */}
        <div className="text-center max-w-3xl px-6 flex flex-col items-center gap-4 mb-10">
          <h2 
            className="heading-primary text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight"
          >
            {title}
          </h2>
          <p className="body-text text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Render animated visual asset - Rendered BELOW the text, centered horizontally */}
        <div className="w-full overflow-hidden flex justify-center">
          {renderVisual()}
        </div>

      </div>
    </section>
  );
}
