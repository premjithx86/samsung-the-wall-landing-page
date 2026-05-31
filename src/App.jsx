import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import TechnologySection from './components/TechnologySection';
import ApplicationSection from './components/ApplicationSection';
import OptionCard from './components/OptionCard';
import ProductGrid from './components/ProductGrid';
import ExploreOptionsSection from './components/ExploreOptionsSection';
import ResaleSection from './components/ResaleSection';
import SpaceGallerySection from './components/SpaceGallerySection';
import ContactSection from './components/ContactSection';
import SocialIcons from './components/SocialIcons';
import FooterSection from './components/FooterSection';
import { technologies } from './data/technologyData';
import { applications } from './data/applicationData';
import { options } from './data/optionsData';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-indigo-500 selection:text-white antialiased w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Living Room TV Video Showcase */}
        <VideoSection />
        
        {/* Mapped Technology Showcase Sections */}
        {technologies.map((tech, index) => (
          <TechnologySection 
            key={index}
            title={tech.title}
            description={tech.description}
            image={tech.image}
            animationType={tech.animationType}
          />
        ))}

        {/* Mapped Application Showcase Sections */}
        {applications.map((app, index) => (
          <ApplicationSection
            key={index}
            index={index}
            total={applications.length}
            title={app.title}
            description={app.description}
            image={app.image}
          />
        ))}

        {/* Mapped Option Cards Section (Light background grid layout) */}
        <section className="bg-[#f8f9fa] w-full py-16 flex flex-col items-center overflow-hidden">
          <div className="max-w-[1400px] w-full flex flex-col">
            {options.map((opt, index) => (
              <OptionCard
                key={index}
                title={opt.title}
                description={opt.description}
                image={opt.image}
                reverse={opt.reverse}
              />
            ))}
          </div>
        </section>

        {/* Product Showcase Grid Section */}
        <ProductGrid />

        {/* Explore Other Options Section (Light gray background `#f2f2f2`) */}
        <ExploreOptionsSection />

        {/* Resale Showcase Section (Dark premium background) */}
        <ResaleSection />

        {/* Space Gallery Showcase Section (Dark gallery) */}
        <SpaceGallerySection />

        {/* Premium Contact Section (Dark background, glass card) */}
        <ContactSection />

        {/* Right-aligned brand social bar */}
        <SocialIcons />

        {/* Centered navigation footer */}
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
