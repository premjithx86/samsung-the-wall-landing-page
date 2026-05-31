import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/space-gallery/space-1.png';
import img2 from '../assets/space-gallery/space-2.png';
import img3 from '../assets/space-gallery/space-3.png';
import img4 from '../assets/space-gallery/space-4.png';
import img5 from '../assets/space-gallery/space-5.png';
import img6 from '../assets/space-gallery/space-6.png';

export default function SpaceGallerySection() {
  const fadeUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
  };

  const images = [
    { 
      id: 1, 
      src: img1, 
      alt: "The Wall in Modern Living Space", 
      gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 h-[220px] sm:h-[280px] md:h-[240px] lg:h-[220px] xl:h-[260px]",
      delay: 0 
    },
    { 
      id: 3, 
      src: img3, 
      alt: "The Wall in Desert Oasis Space", 
      gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-2 h-[220px] sm:h-[280px] md:h-[240px] lg:h-full",
      delay: 0.12 
    },
    { 
      id: 2, 
      src: img2, 
      alt: "The Wall Minimalist Interior Showcase", 
      gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 h-[220px] sm:h-[280px] md:h-[240px] lg:h-[220px] xl:h-[260px]",
      delay: 0.24 
    },
    { 
      id: 4, 
      src: img4, 
      alt: "The Wall Cozy Bedroom Space", 
      gridClass: "col-span-1 md:col-span-1 lg:col-span-4 h-[220px] sm:h-[280px] md:h-[240px] lg:h-[220px] xl:h-[260px]",
      delay: 0.3 
    },
    { 
      id: 5, 
      src: img5, 
      alt: "The Wall High-end Executive Space", 
      gridClass: "col-span-1 md:col-span-1 lg:col-span-4 h-[220px] sm:h-[280px] md:h-[240px] lg:h-[220px] xl:h-[260px]",
      delay: 0.4 
    },
    { 
      id: 6, 
      src: img6, 
      alt: "The Wall Cinematic Entertainment Space", 
      gridClass: "col-span-1 md:col-span-1 lg:col-span-4 h-[220px] sm:h-[280px] md:h-[240px] lg:h-[220px] xl:h-[260px]",
      delay: 0.5 
    },
  ];

  return (
    <section 
      id="space-gallery" 
      className="bg-black py-20 px-6 md:px-12 text-white select-none border-t border-gray-950 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 md:gap-14">
        
        {/* Heading & Subtitle */}
        <div className="text-center space-y-4 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="heading-primary text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none"
          >
            Greatness In Any Space
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="body-text text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed"
          >
            Sophisticated Both Inside And Out, The Wall Is A Visual Complement For Your Space.
          </motion.p>
        </div>

        {/* Responsive CSS Grid Gallery */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 overflow-hidden">
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: img.delay }}
              className={`relative overflow-hidden ${img.gridClass}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover block select-none pointer-events-none transition-transform duration-700 ease-out hover:scale-103"
                style={{ transformOrigin: 'center' }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
