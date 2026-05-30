import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';

export default function SocialIcons() {
  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
    { name: 'Facebook', icon: <FaFacebook />, href: 'https://facebook.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com' }
  ];

  return (
    <div className="w-full bg-black py-6 select-none overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-center md:justify-end items-center">
        
        {/* Social Icons row */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.name} page`}
              className="text-white text-xl sm:text-2xl cursor-pointer hover:text-gray-400 transition-colors duration-300 block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  );
}
