import React from 'react';
import tvImage from '../assets/video/living-room-tv.png';
import playBtn from '../assets/video/play-button.png';

export default function VideoSection() {
  return (
    <section className="bg-black py-20 w-full flex flex-col items-center select-none">
      
      {/* Immersive Video Block Container (90% width, max 1400px, sharp corners) */}
      <div className="relative w-[90vw] max-w-[1400px] cursor-pointer group rounded-none overflow-hidden">
        
        {/* Main TV Background Image */}
        <img 
          src={tvImage} 
          alt="Living Room TV Showcase" 
          className="w-full h-auto object-cover block"
        />

        {/* Centered Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={playBtn} 
            alt="Play Video" 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 transition-transform duration-300 ease-out group-hover:scale-110 select-none pointer-events-none"
          />
        </div>

      </div>

    </section>
  );
}
