import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/productsData';

export default function ProductGrid() {
  return (
    <section id="products" className="bg-[#f8f9fa] w-full py-20 px-6 md:px-12 flex flex-col items-center select-none border-t border-gray-200/40">
      <div className="max-w-[1400px] w-full flex flex-col items-center gap-12">
        
        {/* Section Heading */}
        <div className="text-center">
          <h2 
            className="heading-primary text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            Shop The Wall Products
          </h2>
        </div>

        {/* Dynamic Responsive Columns Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 w-full mt-4">
          {products.map((prod, index) => (
            <div 
              key={index}
              className="w-full border-gray-200/50 lg:[&:not(:nth-child(3n))]:border-r sm:[&:not(:nth-child(2n))]:border-r lg:[&:nth-child(2n)]:border-r"
            >
              <ProductCard 
                title={prod.title} 
                image={prod.image} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
