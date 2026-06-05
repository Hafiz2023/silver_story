import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
    return (
        <div className="bg-white">
            <ProjectsHero />
            <ProjectsGallery />
            <ProjectsCTA />
        </div>
    );
}
