import React from 'react';
import { motion } from 'framer-motion';
import ResaleDisplay from './ResaleDisplay';

export default function ResaleSection() {
  return (
    <section 
      id="resale" 
      className="bg-black py-20 px-6 md:px-12 text-white flex flex-col items-center justify-center select-none border-t border-gray-900"
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-6 md:gap-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 
            className="heading-primary text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-none"
          >
            For Resale
          </h2>
        </motion.div>

        {/* Showcase Images Display */}
        <ResaleDisplay />

        {/* Benefits Sub-section */}
        <div className="w-full max-w-4xl flex flex-col items-center mt-6">
          <div className="w-full text-left space-y-4">
            
            {/* Benefits Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h3 
                className="heading-secondary text-2xl font-bold text-white tracking-tight"
              >
                Benefits
              </h3>
            </motion.div>

            {/* Responsive Benefits Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-12 mt-2">
              
              {/* Left Column benefits */}
              <div className="space-y-3.5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className="flex items-start"
                >
                  <span className="text-white text-[10px] mt-1 mr-3 flex-shrink-0 select-none">▶</span>
                  <span className="body-text text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    Tailored Solutions And Support Services
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                  className="flex items-start"
                >
                  <span className="text-white text-[10px] mt-1 mr-3 flex-shrink-0 select-none">▶</span>
                  <span className="body-text text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    Strategic Marketing And Branding Opportunities
                  </span>
                </motion.div>
              </div>
              
              {/* Right Column benefits */}
              <div className="space-y-3.5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className="flex items-start"
                >
                  <span className="text-white text-[10px] mt-1 mr-3 flex-shrink-0 select-none">▶</span>
                  <span className="body-text text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    Best Discounted Price
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                  className="flex items-start"
                >
                  <span className="text-white text-[10px] mt-1 mr-3 flex-shrink-0 select-none">▶</span>
                  <span className="body-text text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    Exclusive Access To Cutting-Edge Technology
                  </span>
                </motion.div>
              </div>

            </div>

          </div>

          {/* Contact Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="pt-10 text-center w-full"
          >
            <motion.a
              href="#contact"
              className="body-text inline-flex items-center justify-center px-8 py-2.5 text-xs font-bold text-white border border-white/60 bg-transparent hover:bg-white hover:text-black rounded-md transition-all whitespace-nowrap min-w-[130px] shadow-sm"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us
            </motion.a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
