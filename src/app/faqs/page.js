"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import React, { useState } from "react";

const FaqsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is NDIS Beauty Collective?',
      answer: 'NDIS Beauty Collective is a mobile hair and beauty service specifically designed for NDIS participants and individuals with disabilities. We bring professional beauty services directly to your home, ensuring accessibility and comfort.'
    },
    {
      question: 'What is NDIS Beauty Collective?',
      answer: 'NDIS Beauty Collective is a mobile hair and beauty service specifically designed for NDIS participants and individuals with disabilities.'
    },
    {
      question: 'Do you come to my home for appointments?',
      answer: 'Yes! We are a fully mobile service. Our trained professionals travel to your home or preferred location to provide all our beauty services in a comfortable and familiar environment.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We provide mobile services across multiple regions. Please contact us to confirm if we service your area and to schedule an appointment.'
    },
    {
      question: 'Are your services NDIS-funded?',
      answer: 'Yes, our services are NDIS-funded. We work with participants who have NDIS plans that include funding for personal care, capacity building, or assistance with daily living activities.'
    },
    {
      question: 'Do you work with children?',
      answer: 'Yes, we work with children and have experience providing gentle, patient care for young clients with various needs and sensitivities.'
    },
    {
      question: 'How do you ensure accessibility?',
      answer: 'Our team is specially trained in adaptive techniques and inclusive care practices. We accommodate various accessibility needs and work with you to ensure a comfortable, dignified experience tailored to your unique requirements.'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by filling out our online form, calling us directly, or contacting us via email. We\'ll work with you to schedule a convenient time.'
    },
    {
      question: 'What should I prepare for my appointment?',
      answer: 'We bring all necessary equipment and products. Simply ensure we have access to water and adequate lighting in the space where you\'d like the service performed.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <section
          className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/banners/about.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Heading */}
          <h1 className="relative z-10 text-white text-5xl md:text-6xl lg:text-7xl font-bold">
            FAQs
          </h1>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-pink-400 text-3xl">🌸</span>
                <span className="text-[#5fb5b9] text-xl md:text-2xl italic">faq</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="flex justify-center">
                <div className="w-32 md:w-40 h-1 bg-[#5fb5b9] rounded-full"></div>
              </div>
            </div>

            {/* FAQ Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-[#5fb5b9] hover:border-[#5fb5b9]/80 transition-all duration-300 overflow-hidden rounded-3xl"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-300"
                  >
                    <span className="text-gray-800 text-sm md:text-base font-medium pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#5fb5b9] text-2xl font-light transition-transform duration-300">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#5fb5b9]/30">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Do you have other Questions?
              </h3>
              <button className="px-8 py-3 bg-[#5fb5b9] text-white font-semibold rounded-full hover:bg-[#4fa5a9] transition-colors duration-300 uppercase text-sm tracking-wide">
                CONTACT US NOW
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FaqsPage;
