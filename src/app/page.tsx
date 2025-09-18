import AllUnderOneRoof from "./components/AllUnderOneRoof";
import ConsultationAndBrands from "./components/ConsultationAndBrands";
import ConsultationPage from "./components/ConsultationPage";
import ContactPage from "./components/ContactPage";
import CreativeFounders from "./components/CreativeFounders";
import EndSection from "./components/EndSection";
import HappyCustomers from "./components/HappyCustomers";
import HomePage from "./components/HomePage";
import ImageCarousel from "./components/ImageCarousel";
import StatsSection from "./components/StatsSection";
import VideoGallery from "./components/VideoGallery";
import WarrantySection from "./components/WarrantySection";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ContactPage />
      <ConsultationPage />
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
