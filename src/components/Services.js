'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

const Services = () => {
  const [activeTab, setActiveTab] = useState('hair');
  const scrollContainerRef = useRef(null);

  const services = {
    hair: [
      {
        id: 1,
        title: 'Hair Trims and Cuts',
        description: 'Precision haircuts customized to your style and needs, including adaptive techniques for accessibility.',
        image: '/images/services/1.png'
      },
      {
        id: 2,
        title: 'Hair Styling and Blow Waves',
        description: 'From sleek blow-dries to glamorous curls, perfect for everyday or special occasions.',
        image: '/images/services/2.png'
      },
      {
        id: 3,
        title: 'Nanoplasty Hair Treatment',
        description: 'Long-lasting, frizz-free shine with gentle, natural nanotech hair treatment.',
        image: '/images/services/3.png'
      },
      {
        id: 4,
        title: 'Curly Hair Care & Cuts',
        description: 'End-of-life care ensures comfort and individuals dignity in the final days.',
        image: '/images/services/4.png'
      }
    ],
    makeup: [
      {
        id: 1,
        title: 'Special Event Makeup',
        description: 'Professional makeup for weddings, parties, and special occasions.',
        image: '/images/services/1.png'
      },
      {
        id: 2,
        title: 'Natural Look Makeup',
        description: 'Everyday makeup that enhances your natural beauty.',
        image: '/images/services/2.png'
      }
    ],
    additional: [
      {
        id: 1,
        title: 'Nail Care Services',
        description: 'Complete nail care including manicures and pedicures.',
        image: '/images/services/3.png'
      },
      {
        id: 2,
        title: 'Skincare Treatments',
        description: 'Professional skincare treatments for healthy, glowing skin.',
        image: '/images/services/4.png'
      }
    ]
  };

  const currentServices = services[activeTab] || [];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-[#F5F5F5] py-16 md:py-24 overflow-hidden">
      {/* Decorative Flowers - Hidden on Mobile */}
      {/* Bottom Right Flower */}
      <div className="hidden md:block absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-0">
        <Image
          src="/images/flowers/3.png"
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
            <span className="text-[#037080] font-aulletta text-xl md:text-2xl italic">Our Services</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-gray-800 mb-4">
            Our Mobile Hair & Beauty Services
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mb-8">
            <div className="w-32 md:w-40 h-1 bg-[#037080] rounded-full"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
          <button
            onClick={() => setActiveTab('hair')}
            className={`px-6 md:px-8 py-3 md:py-3.5 rounded-full font-roboto-semi-condensed font-semibold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'hair'
                ? 'bg-[#037080] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Hair Services
          </button>
          <button
            onClick={() => setActiveTab('makeup')}
            className={`px-6 md:px-8 py-3 md:py-3.5 rounded-full font-roboto-semi-condensed font-semibold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'makeup'
                ? 'bg-[#037080] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Makeup Services
          </button>
          <button
            onClick={() => setActiveTab('additional')}
            className={`px-6 md:px-8 py-3 md:py-3.5 rounded-full font-roboto-semi-condensed font-semibold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'additional'
                ? 'bg-[#037080] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Additional Services
          </button>
        </div>

        {/* Services Carousel Container */}
        <div className="relative mb-12">
          {/* Left Arrow - Hidden on Mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:bg-gray-50 -ml-4 md:-ml-6"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#037080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow - Hidden on Mobile */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:bg-gray-50 -mr-4 md:-mr-6"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#037080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Services Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-1 md:px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentServices.map((service) => (
              <div
                key={service.id}
                className="flex-none w-[260px] md:w-[320px] bg-white rounded-3xl overflow-hidden transition-all duration-300 group snap-center"
              >
                {/* Service Image */}
                <div className="relative h-56 md:h-64 overflow-hidden rounded-t-3xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Service Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold font-recoleta text-[#037080] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-roboto-semi-condensed text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                 
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {currentServices.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === 0 ? 'w-8 bg-[#037080]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <button className="bg-[#037080] hover:bg-[#3d8a8e] text-white font-roboto-semi-condensed font-bold text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
