import AllUnderOneRoof from "@/components/sections/AllUnderOneRoof";
import ConsultationAndBrands from "@/components/sections/ConsultationAndBrands";
import ConsultationSection from "@/components/sections/ConsultationSection";
import ContactPage from "@/components/sections/ContactPage";
import CreativeFounders from "@/components/sections/CreativeFounders";
import EndSection from "@/components/sections/EndSection";
import HappyCustomers from "@/components/sections/HappyCustomers";
import HeroSection from "@/components/sections/HeroSection";
import ImageCarousel from "@/components/sections/ImageCarousel";
import StatsSection from "@/components/sections/StatsSection";
import VideoGallery from "@/components/sections/VideoGallery";
import WarrantySection from "@/components/sections/WarrantySection";

export default function Home() {
  // This is the main landing page (Home).
  // It composes various functional sections (Hero, Contact, Consultation, etc.)
  // to create a comprehensive single-page-like experience, while still navigating to other pages via Navbar.
  return (
    <div>
      <HeroSection />
      <ContactPage />
      <ConsultationSection />
      <ImageCarousel />
      <StatsSection />
      <WarrantySection />
      <VideoGallery />
      <AllUnderOneRoof />
      <ConsultationAndBrands />
      <HappyCustomers />
      <CreativeFounders />
      <EndSection />
    </div>
  );
}
