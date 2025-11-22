'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="relative bg-[#F5F5F5] py-16 md:py-24 overflow-hidden">
      {/* Decorative Flowers - Hidden on Mobile */}
      {/* Top Left Flower */}
      <div className="hidden md:block absolute -top-4 -left-4 md:-top-6 md:-left-6 z-0">
        <Image
          src="/images/flowers/1.png"
          alt="Decorative flower"
          width={200}
          height={200}
          className="w-40 md:w-48 lg:w-56 h-auto opacity-80"
          priority
        />
      </div>

      {/* Bottom Right Flower */}
      <div className="hidden md:block absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-0">
        <Image
          src="/images/flowers/2.png"
          alt="Decorative flower"
          width={200}
          height={200}
          className="w-40 md:w-48 lg:w-56 h-auto opacity-80"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Small flower icon with text */}
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
            <span className="text-pink-400 text-3xl hover:scale-125 hover:rotate-12 transition-transform duration-300">🌸</span>
            <span className="text-[#037080] font-aulletta text-xl md:text-2xl italic">About Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-gray-800 mb-4 animate-fade-in-up delay-100">
            About NDIS Beauty Collective -<br />
            Empowering Beauty for All
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mb-8 animate-slide-in-left delay-200">
            <div className="w-32 md:w-40 h-1 bg-[#037080] rounded-full"></div>
          </div>

          {/* Description Text */}
          <div className="max-w-5xl mx-auto scroll-reveal">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-roboto-semi-condensed">
              NDIS Beauty Collective was founded with a passion for making beauty accessible to everyone, especially NDIS participants and individuals with disabilities.
              We believe that everyone deserves to feel confident, beautiful, and our mobile hair and beauty services are designed to bring that vision to life. Our
              founder, Jay Jay, saw a gap in the beauty industry for inclusive, accessible services tailored to the unique needs of people with disabilities. That's why we
              travel to your home, creating a safe, comfortable space for haircuts, styling, makeup, and more. Our team is trained to provide compassionate, personalized
              care, ensuring every client feels empowered and valued.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="mt-10 scroll-reveal-scale delay-300">
            <Link href="/about">
              <button className="bg-gradient-to-r from-[#037080] to-[#3d8a8e] hover:from-[#3d8a8e] hover:to-[#037080] text-white font-roboto-semi-condensed font-bold text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 uppercase tracking-wide">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Images Grid */}
        <div className="relative mt-12 md:mt-16 max-w-7xl mx-auto">
          <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
            {/* Left Column - Two small images stacked */}
            <div className="flex flex-col gap-6 w-full md:w-auto">
              {/* Top Left Image */}
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 scroll-reveal-left">
                <Image
                  src="/images/home-about/1.png"
                  alt="Beauty service"
                  width={320}
                  height={240}
                  className="w-full md:w-80 h-56 md:h-60 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 scroll-reveal-left delay-200">
                <Image
                  src="/images/home-about/2.png"
                  alt="Beauty service"
                  width={320}
                  height={240}
                  className="w-full md:w-80 h-56 md:h-60 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column - One large image */}
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full md:w-auto scroll-reveal-right">
              <Image
                src="/images/home-about/3.png"
                alt="Beauty service"
                width={600}
                height={500}
                className="w-full md:w-[600px] h-[400px] md:h-[520px] object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Circular Badge Overlay */}
            <div className="hidden md:block absolute left-[30%] md:left-[30%] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="relative pointer-events-auto group">
                {/* Main Circle Badge with curved text */}
                <div className="relative w-36 h-36 lg:w-44 lg:h-44 hover:scale-110 transition-transform duration-500">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-pink-200 rounded-full shadow-2xl border-[6px] md:border-8 border-white"></div>

                  {/* SVG for curved text - ROTATING */}
                  <svg className="absolute inset-0 w-full h-full animate-rotate" viewBox="0 0 200 200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    {/* Full circular text */}
                    <text className="text-[11px] md:text-[13px] fill-gray-600 uppercase tracking-[0.3em]" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 600 }}>
                      <textPath href="#circlePath" startOffset="0%">
                        CONFIDENT • EVERYONE • DESERVES • TO • FEEL •
                      </textPath>
                    </text>
                  </svg>

                  {/* Center content - STAYS FIXED */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Inner Circle with border */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-600 flex items-center justify-center">
                      {/* Arrow pointing to top right */}
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutUs;
