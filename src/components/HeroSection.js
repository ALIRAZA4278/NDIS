'use client';
import React from 'react';
import { GiFlowerPot } from 'react-icons/gi';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[750px] lg:min-h-[800px]" style={{
        backgroundImage: "url('/images/hero/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center py-16 md:py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            {/* Senior Care Badge */}
            <div className="flex items-center gap-2">
              <GiFlowerPot className="text-pink-300 text-xl md:text-2xl" />
              <span className="text-pink-200 text-base md:text-lg italic font-aulletta">Senior Care Is Our Goal</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-recoleta leading-tight">
              Welcome to NDIS<br />
              Beauty Collective
            </h1>

            {/* Decorative Underline */}
            <div className="w-24 md:w-32 h-1 bg-pink-200"></div>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl font-roboto-semi-condensed font-semibold text-white tracking-wide">
              MOBILE HAIR AND BEAUTY FOR NDIS CLIENTS
            </p>

            {/* CTA Button */}
            <button className="bg-pink-200 hover:bg-pink-300 text-gray-900 font-roboto-semi-condensed font-bold text-sm md:text-base px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase">
              BOOK AN APPOINTMENT
            </button>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl md:rounded-[2rem] shadow-2xl p-6 md:p-8 lg:p-10 w-full max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-recoleta text-gray-800 text-center mb-2 leading-tight">
              Request a call back 
            </h2>
           
            {/* Decorative Underline */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-12 md:w-16 h-0.5 md:h-1 bg-[#037080] rounded-full"></div>
            </div>

            <form className="space-y-4 md:space-y-5">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 md:px-6 py-3 md:py-4 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-700 text-sm placeholder:text-gray-400"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 md:px-6 py-3 md:py-4 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-700 text-sm placeholder:text-gray-400"
                />
              </div>

              {/* Phone and Services Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-700 text-sm placeholder:text-gray-400"
                  />
                </div>

                {/* Services Dropdown */}
                <div className="relative">
                  <select
                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-500 text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select Services</option>
                    <option value="hair">Hair Styling</option>
                    <option value="makeup">Makeup</option>
                    <option value="nails">Nail Care</option>
                    <option value="skincare">Skin Care</option>
                  </select>
                  {/* Dropdown Arrow */}
                  <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 md:w-5 h-4 md:h-5 text-[#037080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-5 md:px-6 py-3 md:py-4 bg-gray-50 border border-gray-300 rounded-2xl md:rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-700 text-sm resize-none placeholder:text-gray-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#037080] hover:bg-[#3d8a8e] text-white font-roboto-semi-condensed font-bold text-xs md:text-sm py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-widest"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
