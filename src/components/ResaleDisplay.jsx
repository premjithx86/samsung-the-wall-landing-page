import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/resale/resale-1.png';
import img2 from '../assets/resale/resale-2.png';
import img3 from '../assets/resale/resale-3.png';

export default function ResaleDisplay() {
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
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative flex-shrink-0"
          style={{
            transform: 'rotateY(42deg) translateX(20px)',
            transformOrigin: 'right center',
            zIndex: 10,
            marginRight: '-80px',
          }}
        >
          <img
            src={img1}
            alt="The Wall Resale Left Panel"
            className="w-[90px] sm:w-[150px] md:w-[220px] lg:w-[300px] xl:w-[340px] h-auto block select-none pointer-events-none"
            style={{
              boxShadow: '6px 6px 30px rgba(0,0,0,0.7)',
            }}
          />
        </motion.div>

        {/* --- Image 2 (Center panel — slight tilt, medium size) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative flex-shrink-0"
          style={{
            transform: 'rotateY(18deg) translateX(10px)',
            transformOrigin: 'right center',
            zIndex: 20,
            marginRight: '-70px',
          }}
        >
          <img
            src={img2}
            alt="The Wall Resale Center Panel"
            className="w-[110px] sm:w-[185px] md:w-[270px] lg:w-[370px] xl:w-[420px] h-auto block select-none pointer-events-none"
            style={{
              boxShadow: '8px 6px 35px rgba(0,0,0,0.65)',
            }}
          />
        </motion.div>

        {/* --- Image 3 (Right panel — facing viewer, largest & dominant) --- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative flex-shrink-0"
          style={{
            transform: 'rotateY(-4deg)',
            transformOrigin: 'left center',
            zIndex: 30,
          }}
        >
          <img
            src={img3}
            alt="The Wall Resale Right Panel"
            className="w-[130px] sm:w-[220px] md:w-[320px] lg:w-[440px] xl:w-[500px] h-auto block select-none pointer-events-none"
            style={{
              boxShadow: '10px 8px 40px rgba(0,0,0,0.6)',
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}