import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-screen h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-200">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/banners/about.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        {/* Heading */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-recoleta text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Main content area - design will be added here */}
      <main className="min-h-screen">
        {/* Content will be added based on your design */}
      </main>

      <Footer />
    </>
  );
}
