import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/resale/resale-1.png';
import img2 from '../assets/resale/resale-2.png';
import img3 from '../assets/resale/resale-3.png';

export default function ResaleDisplay() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveStyle = (imgNum) => {
    const width = windowWidth;

    if (width >= 1280) { // xl desktop
      if (imgNum === 1) return { transform: 'rotateY(42deg) translateX(20px)', transformOrigin: 'right center', zIndex: 10, marginRight: '-85px', width: '340px' };
      if (imgNum === 2) return { transform: 'rotateY(18deg) translateX(10px)', transformOrigin: 'right center', zIndex: 20, marginRight: '-75px', width: '420px' };
      return { transform: 'rotateY(-4deg)', transformOrigin: 'left center', zIndex: 30, width: '500px' };
    }
    if (width >= 1024) { // lg desktop
      if (imgNum === 1) return { transform: 'rotateY(42deg) translateX(15px)', transformOrigin: 'right center', zIndex: 10, marginRight: '-75px', width: '280px' };
      if (imgNum === 2) return { transform: 'rotateY(18deg) translateX(8px)', transformOrigin: 'right center', zIndex: 20, marginRight: '-65px', width: '340px' };
      return { transform: 'rotateY(-4deg)', transformOrigin: 'left center', zIndex: 30, width: '400px' };
    }
    if (width >= 768) { // md tablet
      if (imgNum === 1) return { transform: 'rotateY(42deg) translateX(10px)', transformOrigin: 'right center', zIndex: 10, marginRight: '-55px', width: '200px' };
      if (imgNum === 2) return { transform: 'rotateY(18deg) translateX(5px)', transformOrigin: 'right center', zIndex: 20, marginRight: '-45px', width: '240px' };
      return { transform: 'rotateY(-4deg)', transformOrigin: 'left center', zIndex: 30, width: '280px' };
    }
    if (width >= 640) { // sm small tablet
      if (imgNum === 1) return { transform: 'rotateY(42deg) translateX(8px)', transformOrigin: 'right center', zIndex: 10, marginRight: '-40px', width: '140px' };
      if (imgNum === 2) return { transform: 'rotateY(18deg) translateX(4px)', transformOrigin: 'right center', zIndex: 20, marginRight: '-35px', width: '170px' };
      return { transform: 'rotateY(-4deg)', transformOrigin: 'left center', zIndex: 30, width: '200px' };
    }
    if (width >= 400) { // sm mobile
      if (imgNum === 1) return { transform: 'rotateY(42deg) translateX(6px)', transformOrigin: 'right center', zIndex: 10, marginRight: '-30px', width: '95px' };
      if (imgNum === 2) return { transform: 'rotateY(18deg) translateX(3px)', transformOrigin: 'right center', zIndex: 20, marginRight: '-25px', width: '115px' };
      return { transform: 'rotateY(-4deg)', transformOrigin: 'left center', zIndex: 30, width: '135px' };
    }
    if (width >= 360) { // xs mobile
      if (imgNum === 1) return { transform: 'rotateY(42deg) translateX(4px)', transformOrigin: 'right center', zIndex: 10, marginRight: '-25px', width: '85px' };
      if (imgNum === 2) return { transform: 'rotateY(18deg) translateX(2px)', transformOrigin: 'right center', zIndex: 20, marginRight: '-20px', width: '105px' };
      return { transform: 'rotateY(-4deg)', transformOrigin: 'left center', zIndex: 30, width: '125px' };
    }
    // tiny mobile (<360px)
    if (imgNum === 1) return { transform: 'rotateY(42deg) translateX(3px)', transformOrigin: 'right center', zIndex: 10, marginRight: '-20px', width: '70px' };
    if (imgNum === 2) return { transform: 'rotateY(18deg) translateX(1px)', transformOrigin: 'right center', zIndex: 20, marginRight: '-15px', width: '85px' };
    return { transform: 'rotateY(-4deg)', transformOrigin: 'left center', zIndex: 30, width: '100px' };
  };

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-visible select-none py-6"
      style={{ background: 'transparent' }}
    >
      {/*
        Perspective container: all 3D transforms happen relative to this.
        perspective-[1200px] sets how "deep" the 3D space feels.
      */}
      <div
        className="flex items-center justify-center w-full max-w-[1400px] overflow-visible px-4"
        style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}
      >

        {/* --- Image 1 (Left panel — rotated away, smallest) --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative flex-shrink-0 animate-transform"
          style={getResponsiveStyle(1)}
        >
          <img
            src={img1}
            alt="The Wall Resale Left Panel"
            className="w-full h-auto block select-none pointer-events-none"
            style={{
              boxShadow: '6px 6px 30px rgba(0,0,0,0.7)',
            }}
          />
        </motion.div>

        {/* --- Image 2 (Center panel — slight tilt, medium size) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative flex-shrink-0 animate-transform"
          style={getResponsiveStyle(2)}
        >
          <img
            src={img2}
            alt="The Wall Resale Center Panel"
            className="w-full h-auto block select-none pointer-events-none"
            style={{
              boxShadow: '8px 6px 35px rgba(0,0,0,0.65)',
            }}
          />
        </motion.div>

        {/* --- Image 3 (Right panel — facing viewer, largest & dominant) --- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative flex-shrink-0 animate-transform"
          style={getResponsiveStyle(3)}
        >
          <img
            src={img3}
            alt="The Wall Resale Right Panel"
            className="w-full h-auto block select-none pointer-events-none"
            style={{
              boxShadow: '10px 8px 40px rgba(0,0,0,0.6)',
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}