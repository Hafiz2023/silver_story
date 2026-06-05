"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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

export default function ServicesTabs() {
    const [activeService, setActiveService] = useState(SERVICES_DATA[0]);

    return (
        <Section className="py-20 bg-white">
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
                                    ? "bg-black text-white shadow-lg scale-105"
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
                                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="h-full"
                            >
                                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                                    <Image
                                        src={activeService.image}
                                        alt={activeService.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{activeService.title}</h2>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-inner">
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                        {activeService.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activeService.features.map((feature, idx) => (
                                            <motion.div 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * idx, duration: 0.3 }}
                                                key={idx} 
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                    <Check size={18} />
                                                </div>
                                                <span className="font-medium text-gray-800">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
