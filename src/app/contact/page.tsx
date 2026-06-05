import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
    return (
        <div className="bg-white">
            <ContactHero />
            <ContactFormSection />
            <ContactMap />
        </div>
    );
}
