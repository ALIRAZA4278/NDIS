'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is NDIS Beauty Collective?',
      answer: 'NDIS Beauty Collective is a mobile hair and beauty service specifically designed for NDIS participants and individuals with disabilities. We bring professional beauty services directly to your home, ensuring accessibility and comfort.'
    },
    {
      question: 'Do you come to my home for appointments?',
      answer: 'Yes! We are a fully mobile service. Our trained professionals travel to your home or preferred location to provide all our beauty services in a comfortable and familiar environment.'
    },
    {
      question: 'Are your services NDIS-funded?',
      answer: 'Yes, our services are NDIS-funded. We work with participants who have NDIS plans that include funding for personal care, capacity building, or assistance with daily living activities.'
    },
    {
      question: 'How do you ensure accessibility?',
      answer: 'Our team is specially trained in adaptive techniques and inclusive care practices. We accommodate various accessibility needs and work with you to ensure a comfortable, dignified experience tailored to your unique requirements.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We provide mobile services across multiple regions. Please contact us to confirm if we service your area and to schedule an appointment.'
    },
    {
      question: 'Do you work with children?',
      answer: 'Yes, we work with children and have experience providing gentle, patient care for young clients with various needs and sensitivities.'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by filling out our online form, calling us directly, or contacting us via email. We\'ll work with you to schedule a convenient time.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of mobile hair and beauty services including haircuts, styling, makeup, nail care, and specialized treatments, all tailored to meet the unique needs of NDIS participants.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-24 rounded-2xl md:rounded-[3rem] lg:rounded-[4rem] mx-2 md:mx-6 lg:mx-16 my-6 md:my-10 lg:my-12 overflow-hidden">
      {/* Dark Overlay - Base Layer */}
      <div className="absolute inset-0 z-0 bg-[#313C45]"></div>

      {/* Background Image - On Top of Color */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/images/FAQS-bg.png"
          alt="FAQ background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Small flower icon with text */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-pink-400 text-3xl">🌸</span>
            <span className="text-[#5fb5b9] font-aulletta text-xl md:text-2xl italic">faq</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-white mb-4">
            Frequently Asked Questions
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mb-8">
            <div className="w-32 md:w-40 h-1 bg-[#5fb5b9] rounded-full"></div>
          </div>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#3A4A52] border-2 border-[#5fb5b9] hover:border-[#5fb5b9]/80 transition-all duration-300 overflow-hidden rounded-[2rem] md:rounded-[2.5rem]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 md:px-6 lg:px-8 py-5 md:py-6 text-left hover:bg-white/5 transition-colors duration-300"
              >
                <span className="text-white text-sm md:text-base font-medium pr-3 md:pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0 text-[#5fb5b9] text-xl md:text-2xl font-light transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 md:px-6 lg:px-8 pb-5 md:pb-6 pt-2 border-t border-[#5fb5b9]/30">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
