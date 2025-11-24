'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        title: 'Haircuts for Men and Women',
        description: 'Gender-inclusive, precision haircuts tailored to your style and accessibility needs.',
        image: '/images/services/4.png' 
      },
      {
        id: 5,
        title: 'Curly Hair Care/Cuts',
        description: 'Specialized cuts and care for curly and textured hair, celebrating your natural beauty.',
        image: '/images/services/5.png'
      },
      {
        id: 6,
        title: 'Up-Dos for Events',
        description: 'Elegant hairstyles for weddings, formals, or celebrations, designed with your comfort in mind.',
        image: '/images/services/6.png'
      },
      {
        id: 7,
        title: 'Hair Washing and Blow Drying',
        description: 'Gentle, relaxing hair washing and styling for a refreshed look.',
        image: '/images/services/7.png'
      },
      {
        id: 8,
        title: 'Kids\' Haircuts',
        description: 'Fun, stress-free haircuts for children with disabilities, ensuring a positive experience.',
        image: '/images/services/8.png'
      }
    ],
    makeup: [
      {
        id: 1,
        title: 'Everyday and Special Occasion Makeup',
        description: 'Natural or bold looks tailored to your preferences, using high-quality, skin-friendly products.',
        image: '/images/services/9.png'
      },
      {
        id: 2,
        title: 'Kids\' Hair and Makeup Parties',
        description: 'Fun, inclusive beauty parties for children, perfect for birthdays or special events.',
        image: '/images/services/10.png'
      }
    ],
    additional: [
      {
        id: 1,
        title: 'Sensory-Friendly Sessions',
        description: 'Low-stimulation appointments with minimal noise.',
        image: '/images/services/11.png'
      },
      {
        id: 2,
        title: 'Scalp Massages and Hair Treatments',
        description: 'Relaxing treatments to nourish hair and promote relaxation.',
        image: '/images/services/12.png'
      },
      {
        id: 3,
        title: 'Personalized Consultations',
        description: 'Customized beauty plans to meet your unique needs and preferences.',
        image: '/images/services/13.png'
      }
    ]
  };

  const currentServices = services[activeTab] || [];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 280; // Card width
      const gap = 24; // Gap between cards (md:gap-6 = 24px)
      const scrollAmount = cardWidth + gap;

      const newScrollPosition = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
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
          src="/images/flowers/2.png"
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
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
            <span className="text-pink-400 text-3xl hover:scale-125 hover:rotate-12 transition-transform duration-300">🌸</span>
            <span className="text-[#037080] font-aulletta text-xl md:text-2xl italic">Our Services</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-gray-800 mb-4 animate-fade-in-up delay-100">
            Our Mobile Hair & Beauty Services
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mb-8 animate-slide-in-left delay-200">
            <div className="w-32 md:w-40 h-1 bg-[#037080] rounded-full"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
          <button
            onClick={() => {
              setActiveTab('hair');
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
            className={`px-6 md:px-8 py-3 md:py-3.5 rounded-full font-roboto-semi-condensed font-semibold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'hair'
                ? 'bg-[#037080] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Hair Services
          </button>
          <button
            onClick={() => {
              setActiveTab('makeup');
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
            className={`px-6 md:px-8 py-3 md:py-3.5 rounded-full font-roboto-semi-condensed font-semibold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'makeup'
                ? 'bg-[#037080] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Makeup Services
          </button>
          <button
            onClick={() => {
              setActiveTab('additional');
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
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
                className="flex-none w-[280px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 snap-center"
              >
                {/* Service Image */}
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#40929E] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link href="/services">
            <button className="bg-[#037080] hover:bg-[#3d8a8e] text-white font-roboto-semi-condensed font-bold text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl uppercase tracking-wide">
              VIEW ALL SERVICES
            </button>
          </Link>
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
