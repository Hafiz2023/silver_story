import ServicesHero from "@/components/services/ServicesHero";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServicesWhyChooseUs from "@/components/services/ServicesWhyChooseUs";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHero />
            <ServicesTabs />
            <ServicesWhyChooseUs />
            <ServicesCTA />
        </div>
    );
}
