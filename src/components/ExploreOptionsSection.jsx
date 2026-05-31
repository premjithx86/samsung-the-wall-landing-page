import React from 'react';
import ExploreOptionCard from './ExploreOptionCard';
import { exploreOptions } from '../data/exploreOptionsData';

export default function ExploreOptionsSection() {
  return (
    <section className="bg-[#f2f2f2] w-full py-20 px-6 md:px-12 flex flex-col items-center select-none border-t border-gray-300/30 overflow-hidden">
      <div className="max-w-[1400px] w-full flex flex-col items-center gap-12">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 
            className="heading-primary text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            Explore Our Other Options
          </h2>
        </div>

        {/* 12-Column Responsive Grid Layout (Unequal 7/12 vs 5/12 columns on desktop, top-aligned) */}
        <div className="grid grid-cols-12 gap-8 lg:gap-14 w-full mt-4 items-start">
          {exploreOptions.map((opt, index) => (
            <ExploreOptionCard
              key={index}
              index={index}
              title={opt.title}
              subtitle={opt.subtitle}
              description={opt.description}
              image={opt.image}
            />
          ))}
        </div>

        {/* Shared Centered Get Quote Button */}
        <div className="w-full flex justify-center mt-6">
          <a
            href="#quote"
            className="body-text px-10 py-3 text-sm font-bold text-gray-800 border border-gray-400 bg-transparent hover:bg-gray-800 hover:text-white rounded-md transition-all duration-300 hover:scale-[1.03] active:scale-97 whitespace-nowrap shadow-sm"
          >
            Get Quote
          </a>
        </div>

      </div>
    </section>
  );
}
