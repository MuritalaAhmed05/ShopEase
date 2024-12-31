import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className=" relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover Your Style
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Shop the latest trends in fashion with our curated collection of premium clothing and accessories.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Shop Now
          </Button>
          <Link
  href="/category"
  className="inline-flex px-9 items-center justify-center rounded-md border border-white bg-white/10 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
>
  Category
</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;