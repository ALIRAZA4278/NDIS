'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Feedback submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #2c3e50 0%, #34495e 100%)'
    }}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/feedback-bg.png"
          alt="Feedback background"
          fill
          className="object-cover opacity-30"
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
            <span className="text-[#5fb5b9] font-aulletta text-xl md:text-2xl italic">Get In Touch</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-white mb-4">
            Send Us Your Feedback
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mb-8">
            <div className="w-32 md:w-40 h-1 bg-[#5fb5b9] rounded-full"></div>
          </div>
        </div>

        {/* Feedback Form Box/Modal */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl p-6 md:p-10 lg:p-16 border-2 md:border-4 border-[#5fb5b9]">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-roboto-semi-condensed font-semibold mb-2 text-sm md:text-base">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border-2 border-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#5fb5b9] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 text-sm md:text-base"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-roboto-semi-condensed font-semibold mb-2 text-sm md:text-base">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border-2 border-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#5fb5b9] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 text-sm md:text-base"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white font-roboto-semi-condensed font-semibold mb-2 text-sm md:text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border-2 border-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#5fb5b9] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 text-sm md:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-roboto-semi-condensed font-semibold mb-2 text-sm md:text-base">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border-2 border-white rounded-2xl md:rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#5fb5b9] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 resize-none text-sm md:text-base"
                  placeholder="Tell us what you think..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#037080] hover:bg-[#3d8a8e] text-white font-roboto-semi-condensed font-bold text-sm md:text-base px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl uppercase tracking-wide"
                >
                  SUBMIT FEEDBACK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
