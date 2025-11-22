"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import React, { useState } from "react";

const ServicesPage = () => {
   

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
            Services
          </h1>
        </section>

        {/* Our Services Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-pink-400 text-2xl">🌸</span>
                <span className="text-[#5fb5b9] text-xl italic">What We Offering</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Our Services
              </h2>
              <div className="flex justify-center">
                <div className="w-32 md:w-40 h-1 bg-[#5fb5b9] rounded-full"></div>
              </div>
            </div>

            {/* Hair Services Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-4">
                Hair Services
              </h3>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Service 1 - Hair Trims and Cuts */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/1.png"
                      alt="Hair Trims and Cuts"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Hair Trims and Cuts</h4>
                    <p className="text-gray-600 text-sm">
                      Precision haircuts customized to your style and needs, including adaptive techniques for accessibility.
                    </p>
                  </div>
                </div>

                {/* Service 2 - Hair Styling and Blow Waves */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/2.png"
                      alt="Hair Styling and Blow Waves"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Hair Styling and Blow Waves</h4>
                    <p className="text-gray-600 text-sm">
                      From sleek blow-dries to glamorous curls, perfect for everyday or special occasions.
                    </p>
                  </div>
                </div>

                {/* Service 3 - Nanoplasty Hair Treatment */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/3.png"
                      alt="Nanoplasty Hair Treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Nanoplasty Hair Treatment</h4>
                    <p className="text-gray-600 text-sm">
                      Long-lasting, frizz-free shine with gentle, natural nanotech hair treatment.
                    </p>
                  </div>
                </div>

                {/* Service 4 - Haircuts for Men and Women */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/4.png"
                      alt="Haircuts for Men and Women"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Haircuts for Men and Women</h4>
                    <p className="text-gray-600 text-sm">
                      Gender-inclusive, precision haircuts tailored to your style and accessibility needs.
                    </p>
                  </div>
                </div>

                {/* Service 5 - Curly Hair Care/Cuts */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/5.png"
                      alt="Curly Hair Care/Cuts"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Curly Hair Care/Cuts</h4>
                    <p className="text-gray-600 text-sm">
                      Specialized cuts and care for curly and textured hair, celebrating your natural beauty.
                    </p>
                  </div>
                </div>

                {/* Service 6 - Up-Dos for Events */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/6.png"
                      alt="Up-Dos for Events"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Up-Dos for Events</h4>
                    <p className="text-gray-600 text-sm">
                      Elegant hairstyles for weddings, formals, or celebrations, designed with your comfort in mind.
                    </p>
                  </div>
                </div>

                {/* Service 7 - Hair Washing and Blow Drying */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/7.png"
                      alt="Hair Washing and Blow Drying"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Hair Washing and Blow Drying</h4>
                    <p className="text-gray-600 text-sm">
                      Gentle, relaxing hair washing and styling for a refreshed look.
                    </p>
                  </div>
                </div>

                {/* Service 8 - Kids' Haircuts */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/8.png"
                      alt="Kids' Haircuts"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Kids&apos; Haircuts</h4>
                    <p className="text-gray-600 text-sm">
                      Fun, stress-free haircuts for children with disabilities, ensuring a positive experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Makeup Services Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-4">
                Makeup Services
              </h3>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Service 1 - Everyday and Special Occasion Makeup */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/9.png"
                      alt="Everyday and Special Occasion Makeup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Everyday and Special Occasion Makeup</h4>
                    <p className="text-gray-600 text-sm">
                      Natural or bold looks tailored to your preferences, using high-quality, skin-friendly products.
                    </p>
                  </div>
                </div>

                {/* Service 2 - Kids' Hair and Makeup Parties */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/10.png"
                      alt="Kids' Hair and Makeup Parties"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Kids&apos; Hair and Makeup Parties</h4>
                    <p className="text-gray-600 text-sm">
                      Fun, inclusive beauty parties for children, perfect for birthdays or special events.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-4">
                Additional Services
              </h3>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Service 1 - Sensory-Friendly Sessions */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/11.png"
                      alt="Sensory-Friendly Sessions"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Sensory-Friendly Sessions</h4>
                    <p className="text-gray-600 text-sm">
                      Low-stimulation appointments with minimal noise.
                    </p>
                  </div>
                </div>

                {/* Service 2 - Scalp Massages and Hair Treatments */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/12.png"
                      alt="Scalp Massages and Hair Treatments"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Scalp Massages and Hair Treatments</h4>
                    <p className="text-gray-600 text-sm">
                      Relaxing treatments to nourish hair and promote relaxation.
                    </p>
                  </div>
                </div>

                {/* Service 3 - Personalized Consultations */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="/images/services/13.png"
                      alt="Personalized Consultations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#40929E] mb-2">Personalized Consultations</h4>
                    <p className="text-gray-600 text-sm">
                      Customized beauty plans to meet your unique needs and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
