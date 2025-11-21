'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramImages = [
    '/images/footer/1.png',
    '/images/footer/2.png',
    '/images/footer/3.png',
    '/images/footer/4.png',
    '/images/footer/5.png',
    '/images/footer/6.png',
    '/images/footer/7.png',
    '/images/footer/8.png',
  ];

  return (
    <footer className="relative bg-[#313C45] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1 - Logo and Contact Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="w-40 md:w-48">
              <Link href="/">
                <Image
                  src="/images/logo-white.png"
                  alt="NDIS Beauty Collective Logo"
                  width={192}
                  height={192}
                  className="w-full h-auto"
                />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+61404550851" className="flex items-center gap-3 text-gray-300 hover:text-[#5fb5b9] transition-colors">
                <FaPhone className="text-[#5fb5b9]" />
                <span className="font-roboto-semi-condensed text-sm">+61 404 550 851</span>
              </a>
              <a href="mailto:admin@ndisbeautycollective.com.au" className="flex items-center gap-3 text-gray-300 hover:text-[#5fb5b9] transition-colors">
                <FaEnvelope className="text-[#5fb5b9]" />
                <span className="font-roboto-semi-condensed text-sm break-all">admin@ndisbeautycollective.com.au</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-[#5fb5b9] mt-1 flex-shrink-0" />
                <span className="font-roboto-semi-condensed text-sm">Melbourne and surrounding suburbs</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold font-recoleta mb-6 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-[#5fb5b9] transition-colors font-roboto-semi-condensed text-sm">
                  <span className="text-[#5fb5b9]">→</span> HOME
                </Link>
              </li>
              <li>
                <Link href="/services" className="flex items-center gap-2 text-gray-300 hover:text-[#5fb5b9] transition-colors font-roboto-semi-condensed text-sm">
                  <span className="text-[#5fb5b9]">→</span> SERVICES
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2 text-gray-300 hover:text-[#5fb5b9] transition-colors font-roboto-semi-condensed text-sm">
                  <span className="text-[#5fb5b9]">→</span> ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="flex items-center gap-2 text-gray-300 hover:text-[#5fb5b9] transition-colors font-roboto-semi-condensed text-sm">
                  <span className="text-[#5fb5b9]">→</span> FAQS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 text-gray-300 hover:text-[#5fb5b9] transition-colors font-roboto-semi-condensed text-sm">
                  <span className="text-[#5fb5b9]">→</span> CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Stay Connected */}
          <div>
            <h3 className="text-lg md:text-xl font-bold font-recoleta mb-6 uppercase">Stay Connected</h3>
            <p className="text-gray-300 font-roboto-semi-condensed text-sm mb-6">
              A weekly digest of latest news, articles and resources
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
                className="w-full px-5 py-3 bg-[#34495e] border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5fb5b9] focus:border-transparent transition-all font-roboto-semi-condensed text-white text-sm placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-[#5fb5b9] hover:bg-[#4a9b9f] text-white font-roboto-semi-condensed font-bold text-sm py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                SUBSCRIBE
              </button>
            </form>

            <p className="text-gray-400 font-roboto-semi-condensed text-xs mt-4">
              By continuing, you agree to NDIS Beauty Collective Terms of Use and Privacy Policy
            </p>
          </div>

          {/* Column 4 - Open Hours & Instagram */}
          <div>
            <h3 className="text-lg md:text-xl font-bold font-recoleta mb-6 uppercase">Open Hours</h3>
            <div className="space-y-2 mb-8">
              <p className="text-gray-300 font-roboto-semi-condensed text-sm">
                Monday–Friday: 9 AM–5 PM
              </p>
              <p className="text-gray-300 font-roboto-semi-condensed text-sm">
                Saturday-Sunday:10 AM-3 PM
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold font-recoleta mb-6 uppercase">Instagram</h3>
            {/* Instagram Grid */}
            <div className="grid grid-cols-4 gap-2">
              {instagramImages.map((img, index) => (
                <a
                  key={index}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Instagram post ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-[#1E272F] border-gray-600">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-300 font-roboto-semi-condensed text-sm text-center md:text-left">
              Copyright © 2025 NDIS Beauty Collective. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5fb5b9] transition-colors">
                <FaFacebookF className="text-base" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5fb5b9] transition-colors">
                <FaInstagram className="text-base" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5fb5b9] transition-colors">
                <FaXTwitter className="text-base" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5fb5b9] transition-colors">
                <FaPinterestP className="text-base" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5fb5b9] transition-colors">
                <FaLinkedinIn className="text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#5fb5b9] hover:bg-[#4a9b9f] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
