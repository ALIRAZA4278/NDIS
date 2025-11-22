"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
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
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
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
    <>
      <div className="bg-white">
        <Navbar />
        <section
          className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/banners/about.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Heading */}
          <h1 className="relative z-10 text-white text-5xl md:text-6xl lg:text-7xl font-bold font-recoleta animate-scale-in">
            Contact
          </h1>
        </section>

        {/* Get In Touch Section */}
        <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
          {/* Decorative Flower Images */}
          <div className="absolute left-0 top w-24 md:w-32 ">
            <Image
              src="/images/flowers/1.png"
              alt="Decorative leaf"
              width={120}
              height={200}
              className="w-full h-auto"
            />
          </div>
          

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left Side - Contact Form */}
            <div className="scroll-reveal-left">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-pink-400 text-2xl hover:scale-125 hover:rotate-12 transition-transform duration-300">🌸</span>
                  <span className="text-[#5fb5b9] text-xl italic font-aulletta">Send Us A Message</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-gray-800 mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-base">
                  We think your skin should look and refshed matter Nourish your outer inner beauty with our essential
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-[#5fb5b9] focus:ring-1 focus:ring-[#5fb5b9] outline-none transition-all bg-white text-gray-800 placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email*"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-[#5fb5b9] focus:ring-1 focus:ring-[#5fb5b9] outline-none transition-all bg-white text-gray-800 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject*"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-[#5fb5b9] focus:ring-1 focus:ring-[#5fb5b9] outline-none transition-all bg-white text-gray-800 placeholder-gray-400"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message*"
                  rows="6"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-[#5fb5b9] focus:ring-1 focus:ring-[#5fb5b9] outline-none transition-all bg-white text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-10 py-4 bg-gradient-to-r from-[#5fb5b9] to-[#4fa5a9] hover:from-[#4fa5a9] hover:to-[#5fb5b9] text-white font-semibold rounded-full transition-all duration-300 uppercase text-sm tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>

            {/* Right Side - Map and Contact Info */}
            <div className="space-y-6 scroll-reveal-right">
              {/* Google Map with Location Card */}
              <div className="relative w-full h-80 md:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531654!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f5f0c1%3A0xf577d1b8f2b7e7e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Location Info Card Overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Melbourne</h3>
                      <p className="text-sm text-gray-600">Victoria, Australia</p>
                      <p className="text-xs text-gray-500">City Center</p>
                    </div>
                    <a href="#" className="text-blue-600 text-sm hover:underline">Directions</a>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold text-gray-900">4.7</span>
                    <span className="text-blue-600 text-sm ml-1">250,000+ reviews</span>
                  </div>
                  <a href="#" className="text-blue-600 text-xs hover:underline">View larger map</a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-sm text-gray-600 mb-1">ADDRESS :</p>
                  <p className="text-gray-700">Melbourne and surrounding suburbs</p>
                </div>

                <div className="border-b border-gray-200 pb-3">
                  <p className="text-sm text-gray-600 mb-1">EMAIL :</p>
                  <p className="text-gray-700">admin@ndisbeautycollective.com.au</p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <svg className="w-10 h-10 text-[#5fb5b9]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h1v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-2v8h1c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                  </svg>
                  <p className="text-3xl md:text-4xl font-bold text-gray-800">+61 404 550 851</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="relative overflow-hidden">
          {/* Decorative Flower Images on Right */}
          <div className="absolute right-0 top-20 w-24 md:w-32  z-0">
            <Image
              src="/images/flowers/2.png"
              alt="Decorative flower"
              width={120}
              height={200}
              className="w-full h-auto"
            />
          </div>
       

          <FAQ />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
