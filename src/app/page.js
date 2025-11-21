import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}
