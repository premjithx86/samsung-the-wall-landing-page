import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Applications', href: '#applications' },
    { label: 'Products', href: '#products' },
    { label: 'Resale', href: '#resale' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4.5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Brand Logo */}
      <a href="#" className="flex items-center">
        <span className="logo-text text-xl md:text-2xl font-bold text-gray-900 tracking-normal whitespace-nowrap">
          The Wall
        </span>
      </a>

      {/* Centered Desktop Menu */}
      <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-text text-[15px] font-medium text-gray-600 hover:text-gray-900 tracking-wide transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Desktop Contact Button */}
      <div className="hidden lg:block">
        <a
          href="#contact"
          className="nav-text px-8 py-2.5 text-[14px] font-bold text-white bg-black hover:bg-gray-900 rounded-full transition-all duration-300 active:scale-95"
        >
          Contact
        </a>
      </div>

      {/* Mobile & Tablet Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-2xl text-gray-800 hover:text-black focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile & Tablet Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white transition-transform duration-300 ease-in-out z-40 border-t border-gray-100 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-start pt-12 gap-8 px-6 h-full">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="nav-text text-lg text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="nav-text w-full text-center py-3 text-sm font-bold text-white bg-black hover:bg-gray-900 rounded-full transition-colors active:scale-98 mt-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
