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
            Services
          </h1>
        </section>

        {/* Our Services Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
                <span className="text-pink-400 text-2xl">🌸</span>
                <span className="text-[#5fb5b9] text-xl italic font-aulletta">WHAT WE OFFER</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-recoleta text-gray-800 mb-4 animate-fade-in-up delay-100">
                Our Services
              </h2>
              <div className="flex justify-center animate-slide-in-left delay-200">
                <div className="w-32 md:w-40 h-1 bg-[#5fb5b9] rounded-full"></div>
              </div>
            </div>

            {/* Hair Services Section */}
            <div className="mb-16 animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-[#5fb5b9] pb-4">
                Hair Services
              </h3>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { id: 1, title: "Hair Trims and Cuts", desc: "Precision haircuts customised to your styles and needs, including tailored modifications for those with sensory sensitivities.", img: "/images/services/1.jpg" },
                  { id: 2, title: "Hair Styling and Blow Waves", desc: "From sleek blow-dries to glamorous curls, perfect for everyday or special occasions.", img: "/images/services/2new.png" },
                  { id: 3, title: "Nanoplasty Hair Treatment", desc: "Like Keratin, but less harsh and with better results, giving months of long-lasting frizz-free straight and shiny hair.", img: "/images/services/3new.png" },
                  { id: 4, title: "Haircuts for Men and Women", desc: "Gender, age and disability inclusive haircuts with equal access and positive experiences for all", img: "/images/services/4new.png" },
                  { id: 5, title: "Curly Hair Care/Cuts", desc: "Specialised cuts and care for curly and textured hair, celebrating your natural beauty and all curl types.", img: "/images/services/5.png" },
                  { id: 6, title: "Up-Dos for Events", desc: "Elegant hairstyles for weddings, formals, or celebrations, designed with your comfort in mind.", img: "/images/services/6.png" },
                  { id: 7, title: "Hair Washing and Blow Drying", desc: "Gentle massage based and relaxing hair wash with styling to get you feeling refreshed. ", img: "/images/services/7.png" },
                  { id: 8, title: "Sensory-Friendly Sessions", desc: "Low-stimulation sessions for those with sensory sensitivities.", img: "/images/services/11.png" },
                ].map((service, index) => (
                  <div key={service.id} className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up delay-${Math.min(index * 100, 700)}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                      <h4 className="text-lg font-bold text-[#40929E] mb-2 group-hover:text-[#5fb5b9] transition-colors duration-300">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Makeup Services Section */}
            <div className="mb-16 animate-fade-in-up delay-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-[#5fb5b9] pb-4">
                Makeup Services
              </h3>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { id: 9, title: "Special occasion and everyday makeup", desc: "Natural or bold looks tailored to your preferences, using high-quality, skin-friendly products.", img: "/images/services/9.jpeg" },
                  { id: 10, title: "Kids Hair and Makeup parties", desc: "Fun, inclusive beauty parties for children, perfect for birthdays or special events.", img: "/images/services/10.png" },
                ].map((service, index) => (
                  <div key={service.id} className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up delay-${index * 100}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                      <h4 className="text-lg font-bold text-[#40929E] mb-2 group-hover:text-[#5fb5b9] transition-colors duration-300">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
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
