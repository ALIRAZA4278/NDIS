'use client';
import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#F5F5F5] py-16 md:py-24 overflow-hidden">
      {/* Decorative Flower - Hidden on Mobile */}
      {/* Bottom Left Flower */}
      <div className="hidden md:block absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 z-0">
        <Image
          src="/images/flowers/4.png"
          alt="Decorative flower"
          width={200}
          height={200}
          className="w-40 md:w-48 lg:w-56 h-auto opacity-80"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Small flower icon with text */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-pink-400 text-3xl">🌸</span>
            <span className="text-[#037080] font-aulletta text-xl md:text-2xl italic">Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-gray-800 mb-4">
            Why Choose Us?
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mb-8">
            <div className="w-32 md:w-40 h-1 bg-[#037080] rounded-full"></div>
          </div>
        </div>

        {/* Why Choose Us Image */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <Image
            src="/images/whyChooseUS.png"
            alt="Why Choose Us - NDIS Beauty Collective"
            width={1464}
            height={769}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Bottom Text and Button */}
        <div className="text-center">
          <p className="text-gray-700 text-base md:text-lg font-roboto-semi-condensed mb-8 max-w-4xl mx-auto">
            Book your appointment today and experience beauty care that celebrates you!
          </p>

          <button className="bg-[#037080] hover:bg-[#3d8a8e] text-white font-roboto-semi-condensed font-bold text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
            CONTACT US NOW!
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
