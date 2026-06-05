"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

// Demo data
const projects = [
    { id: 1, title: "The Azure Penthouse", category: "Residential", location: "Mumbai, India", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop" },
    { id: 2, title: "Innovate Tech Hub", category: "Commercial", location: "Bangalore, India", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop" },
    { id: 3, title: "Serenity Spa & Resort", category: "Hospitality", location: "Goa, India", image: "https://images.unsplash.com/photo-1571896349842-68c894913d3e?q=80&w=2940&auto=format&fit=crop" },
    { id: 4, title: "Minimalist Urban Loft", category: "Residential", location: "Delhi, India", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2853&auto=format&fit=crop" },
    { id: 5, title: "The Golden Bistro", category: "Hospitality", location: "Kolkata, India", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop" },
    { id: 6, title: "Skyline Corporate Office", category: "Commercial", location: "Hyderabad, India", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2938&auto=format&fit=crop" },
    { id: 7, title: "Zen Garden Home", category: "Residential", location: "Pune, India", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop" },
    { id: 8, title: "Vogue Fashion Studio", category: "Commercial", location: "Mumbai, India", image: "https://images.unsplash.com/photo-1504384308090-c54be385363d?q=80&w=1587&auto=format&fit=crop" },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectsGallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <Section className="py-20 bg-white">
            <Container>
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 border",
                                activeCategory === cat
                                    ? "bg-black text-white border-black scale-105 shadow-lg"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100 shadow-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                                    {/* Hover Overlay Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            <ArrowUpRight className="w-10 h-10" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-start px-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 mt-2 font-medium">{project.location}</p>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </Section>
    );
}
