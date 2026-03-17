import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MeasurementsSection from "@/components/MeasurementsSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ActingSection from "@/components/ActingSection";
import AdvertisementsSection from "@/components/AdvertisementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="bg-background">
      <Navigation />
      <HeroSection />
      <MeasurementsSection />
      <AboutSection />
      <PortfolioSection />
      <ActingSection />
      <AdvertisementsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
