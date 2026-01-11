import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
