import React from 'react';
import { FiTv, FiGithub, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer id="support" className="border-t border-gray-900 bg-gray-950/60 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 pb-16">
        
        {/* Company Bio column */}
        <div className="md:col-span-4 space-y-6 text-left">
          <a href="#" className="flex items-center gap-2 group">
            <FiTv className="text-2xl text-indigo-500 group-hover:text-pink-500 transition-colors" />
            <span className="font-display font-bold text-xl tracking-wider text-white">
              SAMSUNG <span className="text-indigo-400 font-medium">NEO</span>
            </span>
          </a>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Pushing the boundaries of light, sound, and micro-engineering to craft ultra-premium home theater displays.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2.5 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all active:scale-90" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all active:scale-90" aria-label="YouTube">
              <FiYoutube />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all active:scale-90" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all active:scale-90" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>

        {/* Quick Links columns */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Series
            </h4>
            <ul className="space-y-2">
              {['Neo QLED 8K', 'Neo QLED 4K', 'OLED S95C', 'The Frame'].map((val) => (
                <li key={val}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                    {val}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Support
            </h4>
            <ul className="space-y-2">
              {['User Manuals', 'Firmware Updates', 'Remote Support', 'Warranty'].map((val) => (
                <li key={val}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                    {val}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription column */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
            Stay Updated
          </h4>
          <p className="text-gray-500 text-sm">
            Sign up to get the latest product launch announcements and exclusive updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors active:scale-95 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Footer legalities */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-900/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} Samsung Showcase Demo. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Manage Cookies</a>
        </div>
      </div>
    </footer>
  );
}
