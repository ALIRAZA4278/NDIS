'use client';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn, FaTimes, FaBars } from 'react-icons/fa';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#3d4450] text-white relative hidden min-[968px]:block ">
        <div className="max-w-full px-16">
          <div className="flex items-center h-[45px]">
            {/* Left Side - Contact Info */}
            <div className="flex items-center gap-8 text-sm flex-1">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white text-sm" />
                <span className="font-roboto-semi-condensed">Melbourne and surrounding suburbs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-white text-xs" />
                <span className="font-roboto-semi-condensed">+61 404 550 851</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white text-sm" />
                <span className="font-roboto-semi-condensed">admin@ndisbeautycollective.com.au</span>
              </div>
            </div>

            {/* Right Side - Social Icons with full height background */}
            <div className="flex items-center gap-4 bg-[#037080] px-8 h-full ml-auto">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaPinterestP className="text-sm" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md relative">
        <div className="max-w-full px-4 md:px-16">
          <div className="flex items-center justify-between h-[80px] md:h-[100px]">
            {/* Logo - positioned to overlap both sections */}
            <div className="absolute left-4 md:left-16 top-1 md:top-2 z-20">
              <div className="w-[60px] h-[60px] md:w-[150px] md:h-[150px] rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border-2 md:border-4 border-white">
                <img 
                  src="/images/logo.png" 
                  alt="NDIS Beauty Collective" 
                  className="w-full h-full object-contain p-1 md:p-3"
                />
              </div>
            </div>

            {/* Spacer for logo */}
            <div className="w-[80px] md:w-[220px]"></div>


            {/* Call Us Section - Desktop Only */}
            <div className="hidden lg:flex items-center gap-3">
              
            {/* Navigation Links - Desktop Only */}
            <nav className="hidden lg:flex items-center gap-12 md:gap-9 flex-1 ">
              <a href="/" className="text-[#2c3e50] font-roboto-semi-condensed font-bold text-[15px] hover:text-[#037080] transition-colors tracking-wide">
                HOME
              </a>
              <a href="/about" className="text-[#2c3e50] font-roboto-semi-condensed font-bold text-[15px] hover:text-[#037080] transition-colors tracking-wide">
                ABOUT US
              </a>
              <a href="#services" className="text-[#2c3e50] font-roboto-semi-condensed font-bold text-[15px] hover:text-[#037080] transition-colors tracking-wide">
                SERVICES
              </a>
              <a href="#faqs" className="text-[#2c3e50] font-roboto-semi-condensed font-bold text-[15px] hover:text-[#037080] transition-colors tracking-wide">
                FAQS
              </a>
              <a href="#contact" className="text-[#2c3e50] font-roboto-semi-condensed font-bold text-[15px] hover:text-[#037080] transition-colors tracking-wide">
                CONTACT
              </a>
           
           <div className='flex '>

              <div className="w-14 h-14 bg-[#037080] rounded-full flex items-center justify-center shrink-0 mr-2">
                <IoChatbubbleEllipsesSharp className="text-white text-2xl" />
              </div>
              <div className="flex flex-col mr-8 md:mr-2">
                <span className="text-[#037080] text-[11px] font-roboto-semi-condensed uppercase tracking-wider">CALL US ANYTIME:</span>
                <span className="text-[#2c3e50] text-[22px] font-roboto-semi-condensed font-bold leading-tight">+61 404 550 851</span>
              </div>
           </div>
            </nav>

            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden ml-auto text-[#3d4450] z-30 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Sidebar Header */}
          <div className="bg-[#037080] p-6 flex items-center justify-between shrink-0">
            <h2 className="text-white font-roboto-semi-condensed font-bold text-lg">MENU</h2>
            <button 
              onClick={toggleMenu}
              className="text-white"
              aria-label="Close menu"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col py-6">
            <a 
              href="#home" 
              onClick={toggleMenu}
              className="px-6 py-4 text-[#2c3e50] font-roboto-semi-condensed font-bold text-base hover:bg-[#037080] hover:text-white transition-colors border-b border-gray-100"
            >
              HOME
            </a>
            <a 
              href="#about" 
              onClick={toggleMenu}
              className="px-6 py-4 text-[#2c3e50] font-roboto-semi-condensed font-bold text-base hover:bg-[#037080] hover:text-white transition-colors border-b border-gray-100"
            >
              ABOUT US
            </a>
            <a 
              href="#services" 
              onClick={toggleMenu}
              className="px-6 py-4 text-[#2c3e50] font-roboto-semi-condensed font-bold text-base hover:bg-[#037080] hover:text-white transition-colors border-b border-gray-100"
            >
              SERVICES
            </a>
            <a 
              href="#faqs" 
              onClick={toggleMenu}
              className="px-6 py-4 text-[#2c3e50] font-roboto-semi-condensed font-bold text-base hover:bg-[#037080] hover:text-white transition-colors border-b border-gray-100"
            >
              FAQS
            </a>
            <a 
              href="#contact" 
              onClick={toggleMenu}
              className="px-6 py-4 text-[#2c3e50] font-roboto-semi-condensed font-bold text-base hover:bg-[#037080] hover:text-white transition-colors border-b border-gray-100"
            >
              CONTACT
            </a>
          </nav>

          {/* Call Us Section in Sidebar */}
          <div className="mt-auto p-6 bg-gray-50 shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#037080] rounded-full flex items-center justify-center shrink-0">
                <IoChatbubbleEllipsesSharp className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#037080] text-[10px] font-roboto-semi-condensed uppercase tracking-wider">CALL US ANYTIME:</span>
                <span className="text-[#2c3e50] text-[18px] font-roboto-semi-condensed font-bold leading-tight">+61 404 550 851</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 justify-center pt-4 border-t border-gray-200">
              <a href="#" className="w-10 h-10 bg-[#037080] rounded-full flex items-center justify-center text-white hover:bg-[#3d4450] transition-colors">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#037080] rounded-full flex items-center justify-center text-white hover:bg-[#3d4450] transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#037080] rounded-full flex items-center justify-center text-white hover:bg-[#3d4450] transition-colors">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#037080] rounded-full flex items-center justify-center text-white hover:bg-[#3d4450] transition-colors">
                <FaPinterestP className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#037080] rounded-full flex items-center justify-center text-white hover:bg-[#3d4450] transition-colors">
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#037080] text-sm mt-1 shrink-0" />
                <span className="text-[#2c3e50] text-xs font-roboto-semi-condensed">Melbourne and surrounding suburbs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#037080] text-xs shrink-0" />
                <span className="text-[#2c3e50] text-xs font-roboto-semi-condensed">+61 404 550 851</span>
              </div>
              <div className="flex items-start gap-2">
                <FaEnvelope className="text-[#037080] text-xs mt-1 shrink-0" />
                <span className="text-[#2c3e50] text-xs font-roboto-semi-condensed break-all">admin@ndisbeautycollective.com.au</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
