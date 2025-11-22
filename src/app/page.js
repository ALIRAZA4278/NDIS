import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import StatsCounter from '@/components/StatsCounter';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import Feedback from '@/components/Feedback';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <StatsCounter />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}
