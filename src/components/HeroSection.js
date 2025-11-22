'use client';
import React, { useState } from 'react';
import { GiFlowerPot } from 'react-icons/gi';
import Link from 'next/link';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Hair Trims and Cuts',
    'Hair Styling and Blow Waves',
    'Nanoplasty Hair Treatment',
    'Haircuts for Men and Women',
    'Curly Hair Care/Cuts',
    'Up-Dos for Events',
    'Hair Washing and Blow Drying',
    'Kids\' Haircuts',
    'Everyday and Special Occasion Makeup',
    'Kids\' Hair and Makeup Parties',
    'Sensory-Friendly Sessions',
    'Scalp Massages and Hair Treatments',
    'Personalized Consultations'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We will contact you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
  
    <section className="relative w-screen min-h-[700px] md:min-h-[750px] lg:min-h-[800px]" style={{
        backgroundImage: "url('/images/hero/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-end md:items-center py-12 md:py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end lg:items-center">

          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            {/* Senior Care Badge */}
            <div className="flex items-center gap-2 animate-fade-in-down">
              <GiFlowerPot className="text-pink-300 text-xl md:text-2xl hover:scale-125 hover:rotate-12 transition-transform duration-300" />
              <span className="text-pink-200 text-base md:text-lg italic font-aulletta">Senior Care Is Our Goal</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-recoleta leading-tight animate-fade-in-up delay-100">
              Welcome to NDIS<br />
              Beauty Collective
            </h1>

            {/* Decorative Underline */}
            <div className="w-24 md:w-32 h-1 bg-pink-200 animate-slide-in-left delay-200"></div>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl font-roboto-semi-condensed font-semibold text-white tracking-wide animate-fade-in-up delay-300">
              MOBILE HAIR AND BEAUTY FOR NDIS CLIENTS
            </p>

            {/* CTA Button */}
            <Link href="/contact" className="inline-block animate-scale-in delay-400">
              <button className="bg-gradient-to-r from-pink-200 to-pink-300 hover:from-pink-300 hover:to-pink-400 text-gray-900 font-roboto-semi-condensed font-bold text-sm md:text-base px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 uppercase">
                BOOK AN APPOINTMENT
              </button>
            </Link>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl md:rounded-[2rem] shadow-2xl hover:shadow-3d p-5 md:p-6 lg:p-8 w-full max-w-lg ml-auto lg:mr-0 animate-fade-in-up delay-200 hover:-translate-y-2 transition-all duration-500">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-recoleta text-gray-800 text-center mb-12 leading-tight animate-fade-in delay-400">
             Request a Call Back
            </h2>



            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 md:px-5 py-2.5 md:py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 text-sm placeholder:text-gray-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 md:px-5 py-2.5 md:py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 text-sm placeholder:text-gray-500"
                />
              </div>

              {/* Phone and Services Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-2.5 md:py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 text-sm placeholder:text-gray-500"
                  />
                </div>

                {/* Services Dropdown */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-500 text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select Services</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {/* Dropdown Arrow */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-[#037080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 md:px-5 py-2.5 md:py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#037080] focus:border-transparent transition-all font-roboto-semi-condensed text-gray-800 text-sm resize-none placeholder:text-gray-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#037080] to-[#3d8a8e] hover:from-[#3d8a8e] hover:to-[#037080] text-white font-roboto-semi-condensed font-bold text-xs md:text-sm py-3 md:py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] uppercase tracking-widest ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
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
