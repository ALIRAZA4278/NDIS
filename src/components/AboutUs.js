'use client';
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative bg-[#F5F5F5] py-16 md:py-24 overflow-x-hidden">
      {/* Decorative Flowers - Same Size for Both */}
      {/* Top Left Flower */}
      <div className="absolute top-0 left-0  z-0 ">
        <Image
          src="/images/flowers/1.png"
          alt="Decorative flower"
          width={130}
          height={130}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Bottom Right Flower - SAME SIZE */}
      <div className="absolute bottom-0 right-0  z-0">
        <Image
          src="/images/flowers/2.png"
          alt="Decorative flower"
          width={130}
          height={130}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Small flower icon with text */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-pink-400 text-3xl">🌸</span>
            <span className="text-[#037080] font-aulletta text-xl md:text-2xl italic">About Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-gray-800 mb-4">
            About NDIS Beauty Collective -<br />
            Empowering Beauty for All
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mb-8">
            <div className="w-32 md:w-40 h-1 bg-[#037080] rounded-full"></div>
          </div>

          {/* Description Text */}
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-roboto-semi-condensed">
              NDIS Beauty Collective was founded with a passion for making beauty accessible to everyone, especially NDIS participants and individuals with disabilities.
              We believe that everyone deserves to feel confident, beautiful, and our mobile hair and beauty services are designed to bring that vision to life. Our
              founder, Jay Jay, saw a gap in the beauty industry for inclusive, accessible services tailored to the unique needs of people with disabilities. That's why we
              travel to your home, creating a safe, comfortable space for haircuts, styling, makeup, and more. Our team is trained to provide compassionate, personalized
              care, ensuring every client feels empowered and valued.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="mt-10">
            <button className="bg-[#037080] hover:bg-[#3d8a8e] text-white font-roboto-semi-condensed font-bold text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div className="relative mt-16 max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Left Column - Two small images stacked */}
            <div className="flex flex-col gap-6 w-full md:w-auto">
              {/* Top Left Image */}
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
                <Image
                  src="/images/home-about/1.png"
                  alt="Beauty service"
                  width={320}
                  height={240}
                  className="w-full md:w-80 h-56 md:h-60 object-cover"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
                <Image
                  src="/images/home-about/2.png"
                  alt="Beauty service"
                  width={320}
                  height={240}
                  className="w-full md:w-80 h-56 md:h-60 object-cover"
                />
              </div>
            </div>

            {/* Right Column - One large image */}
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl w-full md:w-auto">
              <Image
                src="/images/home-about/3.png"
                alt="Beauty service"
                width={600}
                height={500}
                className="w-full md:w-[600px] h-[400px] md:h-[520px] object-cover"
              />
            </div>

            {/* Circular Badge Overlay */}
            <div className="absolute top-1/2 left-1/2 md:left-[30%] transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                {/* Main Circle Badge with curved text */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-pink-200 rounded-full shadow-2xl border-[6px] md:border-8 border-white"></div>

                  {/* SVG for curved text */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    {/* Top curved text */}
                    <text className="text-[11px] md:text-[13px] fill-gray-600 uppercase tracking-[0.3em]" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 600 }}>
                      <textPath href="#circlePath" startOffset="25%">
                        CONFIDENT EVERYONE DESERVES
                      </textPath>
                    </text>
                    {/* Bottom curved text */}
                    <text className="text-[11px] md:text-[13px] fill-gray-600 uppercase tracking-[0.3em]" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 600 }}>
                      <textPath href="#circlePath" startOffset="75%">
                        TO FEEL CONFIDENT EVERYONE
                      </textPath>
                    </text>
                  </svg>

                  {/* Center content */}
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

        {/* Stats Section */}
        <div className="mt-20 md:mt-28 px-4 md:px-8">
          <div className="max-w-7xl mx-auto bg-[#037080] rounded-[2rem] md:rounded-[3rem] shadow-2xl border-[3px] md:border-[4px] border-[#5fb5b9] overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-around py-10 md:py-14 px-6 md:px-12">
              {/* Stat 1 */}
              <div className="text-white text-center py-4 md:py-0">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold font-recoleta mb-1 md:mb-2 leading-none">35+</h3>
                <p className="text-white font-roboto-semi-condensed text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">YEAR EXPERIENCE</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-20 lg:h-24 bg-white/30"></div>

              {/* Stat 2 */}
              <div className="text-white text-center py-4 md:py-0 border-y md:border-y-0 border-white/20 md:border-none w-full md:w-auto">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold font-recoleta mb-1 md:mb-2 leading-none">22k+</h3>
                <p className="text-white font-roboto-semi-condensed text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">HAPPY CLIENTS</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-20 lg:h-24 bg-white/30"></div>

              {/* Stat 3 */}
              <div className="text-white text-center py-4 md:py-0">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold font-recoleta mb-1 md:mb-2 leading-none">220+</h3>
                <p className="text-white font-roboto-semi-condensed text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">TRUSTED CENTER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
