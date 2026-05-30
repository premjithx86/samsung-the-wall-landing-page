import React from 'react';
import img1 from '../assets/features/18_pexels_ekamelev_8169649_1.png';
import img2 from '../assets/features/21_pexels_pixabay_163235_1.png';
import img3 from '../assets/features/24_pexels_tracehudson_2896668_1.png';
import img4 from '../assets/features/27_florida_map_acrylic_1125_1.png';

export default function Features() {
  const cards = [
    {
      img: img1,
      title: 'Micro LED Technology',
      desc: 'Witness an unmatched image presentation on a whole new scale',
    },
    {
      img: img2,
      title: 'One-of-a-kind Visuals',
      desc: 'Experience pure visual innovation derived from best-in-class picture technologies',
    },
    {
      img: img3,
      title: 'Infinity Design',
      desc: 'Choose what you want to see from a diverse selection of entertainment and lifestyle content',
    },
    {
      img: img4,
      title: 'Total UX',
      desc: 'Make a statement with subtle refinement in a seamless, sophisticated design',
    },
  ];

  return (
    <section id="features" className="bg-[#030712] py-24 px-6 md:px-12 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center">
          <h2 
            className="heading-primary text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white/95"
          >
            Key Features
          </h2>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-gray-900 shadow-xl hover:-translate-y-2.5 hover:shadow-2xl hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="overflow-hidden w-full h-[320px] sm:h-[360px] md:h-[400px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Glassmorphic Description Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md border-t border-white/10 flex flex-col justify-end min-h-[140px] text-center">
                <h3 
                  className="heading-secondary text-lg text-white mb-2 leading-snug"
                >
                  {card.title}
                </h3>
                <p className="body-text text-xs text-white/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
