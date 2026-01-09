"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

// Real data with Unsplash images
const projects = [
    {
        id: 1,
        title: "The Azure Penthouse",
        category: "Residential",
        location: "Mumbai, India",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Innovate Tech Hub",
        category: "Commercial",
        location: "Bangalore, India",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Serenity Spa & Resort",
        category: "Hospitality",
        location: "Goa, India",
        image: "https://images.unsplash.com/photo-1571896349842-68c894913d3e?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Minimalist Urban Loft",
        category: "Residential",
        location: "Delhi, India",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2853&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "The Golden Bistro",
        category: "Hospitality",
        location: "Kolkata, India",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Skyline Corporate Office",
        category: "Commercial",
        location: "Hyderabad, India",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2938&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Zen Garden Home",
        category: "Residential",
        location: "Pune, India",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Vogue Fashion Studio",
        category: "Commercial",
        location: "Mumbai, India",
        image: "https://images.unsplash.com/photo-1504384308090-c54be385363d?q=80&w=1587&auto=format&fit=crop"
    },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full bg-black flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=3000&auto=format&fit=crop"
                    alt="Projects Hero"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider">Our Portfolio</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
                            A curated collection of our finest work across residential, commercial, and hospitality sectors.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Section className="py-20">
                <Container>
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-base font-medium transition-all duration-300 border",
                                    activeCategory === cat
                                        ? "bg-black text-white border-black scale-105"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative cursor-pointer"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-md mb-4 bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                                        {/* Hover Overlay Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <ArrowUpRight className="w-8 h-8" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-500 mt-1">{project.location}</p>
                                        </div>
                                        <span className="text-sm font-medium uppercase tracking-wider text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section className="bg-gray-50 py-24">
                <Container className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Inspired by what you see?</h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        Every great space starts with a conversation. Let&apos;s discuss how we can transform your vision into reality.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all hover:-translate-y-1"
                    >
                        Start Your Project
                    </a>
                </Container>
            </Section>
        </div>
    );
}
