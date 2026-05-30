import React from 'react';
import { motion } from 'framer-motion';

export default function FooterSection() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' }
  ];

  return (
    <footer 
      className="bg-black py-16 px-6 md:px-12 select-none border-t border-gray-950 text-center overflow-visible"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">
        
        {/* Brand Logo Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 
            className="logo-text text-2xl sm:text-3xl tracking-widest text-white uppercase"
          >
            The Wall
          </h2>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <ul 
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 md:gap-16 text-sm font-semibold tracking-wider uppercase text-gray-400"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="footer-nav-text transition-colors duration-300 hover:text-white relative py-1 block group"
                >
                  {link.name}
                  {/* Expanding underline hover effect */}
                  <span 
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" 
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Footer Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="body-text text-[10px] sm:text-xs text-gray-600 tracking-wide text-center"
        >
          &copy; {new Date().getFullYear()} Samsung Electronics Co., Ltd. All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
}
