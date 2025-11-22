"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import React from "react";

const about = () => {
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
          {/* Overlay for better text visibility */}
          {/* <div className="absolute inset-0 bg-black/20"></div> */}

          {/* Heading */}
          <h1 className="relative z-10 text-white text-5xl md:text-6xl lg:text-7xl font-bold">
            About Us
          </h1>
        </section>

        {/* Empowering Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Empowering Beauty, Inclusivity,<br />and Confidence
              </h2>
              <div className="w-24 h-1 bg-teal-500 mt-4"></div>
            </div>

            {/* Circle Badge */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56">
                {/* Main pink circle */}
                <div className="absolute inset-0 rounded-full bg-[#F3CCC5]"></div>

                {/* Inner circle with border */}
                <div className="absolute inset-[25%] rounded-full bg-[#F3CCC5] border-[2.5px] border-[#874D42] flex items-center justify-center">
                  {/* Arrow */}
                  <svg
                    className="w-10 h-10 lg:w-12 lg:h-12 text-[#874D42] transform rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>

                {/* Curved Text */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 200"
                  style={{ transform: 'rotate(-92deg)' }}
                >
                  <defs>
                    <path
                      id="circlePathAbout"
                      d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text className="text-[10.5px] lg:text-[11.5px] font-semibold fill-[#874D42] tracking-[0.25em] uppercase">
                    <textPath href="#circlePathAbout" startOffset="0%">
                      CONFIDENT EVERYONE DESERVES TO FEEL
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Image and Mission Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Image */}
            <div className="w-full mb-8">
              <Image
                src="/images/about/1.png"
                alt="NDIS Beauty Collective Mission"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Mission Text */}
            <div className="max-w-4xl">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                NDIS Beauty Collective was created with one powerful mission in mind: to make high-quality beauty services accessible to everyone, especially individuals living with disabilities and NDIS participants. We believe beauty should never come with barriers, which is why we bring professional hair and beauty care straight to your doorstep—removing the stress and limitations of traditional salon visits.
              </p>
            </div>
          </div>
        </section>

        {/* Founded with Purpose Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Founded with Purpose */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Founded with<br />Purpose
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Our founder, Jay Jay, recognized a gap in the beauty industry—where comfort, accessibility, and inclusivity were often overlooked. With a vision rooted in compassion and empowerment, NDIS Beauty Collective was born to serve the unique needs of people of all abilities. From precision haircuts and glamorous styling to sensory-friendly appointments and child-focused services, everything we do is guided by care, understanding, and respect.
              </p>
            </div>

            {/* What We Offer */}
            <div>
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-gray-800">01</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">What We Offer</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                We support both self-managed and plan-managed NDIS participants with personalised services tailored to mobility, sensory, and communication needs. Our trained team ensures every client feels safe, supported, and confident.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-gray-800">02</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To provide equal access to professional beauty services and help every individual feel beautiful in their own skin. With kindness at our core and convenience at your fingertips, NDIS Beauty Collective is redefining what inclusive beauty looks like—one appointment at a time.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default about;
