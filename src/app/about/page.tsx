import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutProcess from "@/components/about/AboutProcess";
import AboutCTA from "@/components/about/AboutCTA";
import TeamSlider from "@/components/sections/TeamSlider";
import VideoGallery from "@/components/sections/VideoGallery";

export default function AboutPage() {
    return (
        <div className="bg-white">
            <AboutHero />
            <AboutIntro />
            <TeamSlider />
            <AboutProcess />
            <div className="py-8">
                <VideoGallery />
            </div>
            <AboutCTA />
        </div>
    );
}
