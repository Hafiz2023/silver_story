"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { BackgroundVideo } from "@/components/ui/background-video";
import { Card, CardContent } from "@/components/ui/card";

// Data for services
const SERVICES_DATA = [
    {
        id: "residential",
        title: "Residential Interiors",
        description: "We create homes that are a true reflection of your personality. From cozy apartments to luxurious villas, our designs blend comfort with style.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=3000&auto=format&fit=crop",
        features: ["Space Planning", "Custom Furniture", "Lighting Design", "Decor & Styling"]
    },
    {
        id: "commercial",
        title: "Commercial Spaces",
        description: "Boost productivity and impress clients with our state-of-the-art office and retail designs. We focus on functionality and brand identity.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop",
        features: ["Office Layouts", "Retail Display", "Acoustics", "Brand Integration"]
    },
    {
        id: "kitchen",
        title: "Modular Kitchens",
        description: "The heart of your home deserves the best. Our modular kitchens are designed for efficiency, durability, and stunning aesthetics.",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2768&auto=format&fit=crop",
        features: ["Ergonomic Design", "Smart Storage", "High-End Appliances", "Sustainable Materials"]
    },
    {
        id: "hospitality",
        title: "Hospitality Design",
        description: "Creating unforgettable experiences for guests. Our hospitality designs optimize flow and ambiance for hotels and restaurants.",
        image: "https://images.unsplash.com/photo-1552321901-443b740521e1?q=80&w=2670&auto=format&fit=crop",
        features: ["Lobby Design", "Guest Rooms", "Restaurant Layouts", "Ambiance Control"]
    }
];

export default function ServicesPage() {
    const SERVICES_HERO_VIDEO = "lpzEd8gpWVM"; // Reusing video or change if needed
    const [activeService, setActiveService] = useState(SERVICES_DATA[0]);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden bg-black text-white">
                <BackgroundVideo videoId={SERVICES_HERO_VIDEO} />
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h1" className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4 drop-shadow-2xl">
                            Our Expertise
                        </Typography>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                            Crafting environments that inspire and endure.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Services Tab Section */}
            <Section className="py-20">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar / Tabs */}
                        <div className="lg:w-1/3 space-y-4">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Services</h3>
                            {SERVICES_DATA.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(service)}
                                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between group ${activeService.id === service.id
                                        ? "bg-black text-white shadow-lg"
                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    <span className="text-lg font-medium">{service.title}</span>
                                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${activeService.id === service.id ? "translate-x-1" : "opacity-0 group-hover:opacity-50"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="lg:w-2/3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full"
                                >
                                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
                                        <Image
                                            src={activeService.image}
                                            alt={activeService.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-2">{activeService.title}</h2>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                            {activeService.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeService.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                        <Check size={18} />
                                                    </div>
                                                    <span className="font-medium text-gray-800">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Why Choose Us / Process Grid */}
            <Section className="bg-neutral-900 text-white py-24">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Design Meets Perfection</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-neutral-800 border-neutral-700 text-white">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold mb-4 text-white">Personalized Approach</h3>
                                <p className="text-gray-400">Every project is unique. We tailor our process to fit your specific needs and preferences.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-neutral-800 border-neutral-700 text-white">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold mb-4 text-white">Premium Materials</h3>
                                <p className="text-gray-400">We source only the finest materials to ensure longevity and timeless beauty.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-neutral-800 border-neutral-700 text-white">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold mb-4 text-white">Timely Delivery</h3>
                                <p className="text-gray-400">We respect your time. Our project management ensures on-time completion, every time.</p>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-24">
                <Container>
                    <div className="bg-primary/5 rounded-3xl p-12 md:p-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Have a Project in Mind?</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Whether it&apos;s a single room or an entire building, we&apos;re ready to bring your vision to life.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-transform hover:-translate-y-1 duration-300"
                        >
                            Get a Free Consultation
                        </a>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
