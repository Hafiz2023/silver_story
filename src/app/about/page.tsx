"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundVideo } from "@/components/ui/background-video";
import TeamSlider from "@/components/sections/TeamSlider";
import VideoGallery from "@/components/sections/VideoGallery";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Layers, Lightbulb, PenTool } from "lucide-react";

export default function AboutPage() {
    // Using a reliable interior design related video ID (or reusable one)
    const ABOUT_HERO_VIDEO = "lpzEd8gpWVM";

    // Process Steps Data
    const processSteps = [
        {
            id: 1,
            title: "Discovery",
            description: "We start by understanding your vision, lifestyle, and preferences through deep consultation.",
            icon: <Lightbulb className="w-8 h-8 text-primary" />,
        },
        {
            id: 2,
            title: "Design & Concept",
            description: "Our designers create mood boards, 3D visualizations, and layouts tailored to your space.",
            icon: <PenTool className="w-8 h-8 text-primary" />,
        },
        {
            id: 3,
            title: "Development",
            description: "We handle material selection, technical drawings, and coordinate with craftsmen.",
            icon: <Layers className="w-8 h-8 text-primary" />,
        },
        {
            id: 4,
            title: "Execution",
            description: "Precision installation and styling to bring the final vision to life seamlessly.",
            icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section with Video Background */}
            <div className="relative w-full h-[70vh] overflow-hidden bg-black text-white">
                <BackgroundVideo videoId={ABOUT_HERO_VIDEO} />
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h1" className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4 drop-shadow-lg">
                            Our Story
                        </Typography>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
                            Crafting spaces that tell your unique narrative.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction Part - Text & Image */}
            <Section className="py-20 md:py-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="block text-primary font-bold tracking-widest uppercase mb-2 text-sm">Who We Are</span>
                            <Typography variant="h2" className="mb-6 leading-tight text-4xl md:text-5xl font-bold">
                                We Don&apos;t Just Design Spaces, <br className="hidden md:block" /> We Craft Experiences.
                            </Typography>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Silver Storey was born out of a desire to redefine luxury living in India. We believe that a home is more than just four walls; it is a canvas where life happens, memories are made, and dreams take shape.
                                </p>
                                <p>
                                    Our philosophy is simple: **Listening is our greatest tool.** We listen to your unspoken needs, your functional requirements, and your aesthetic aspirations to create a home that is distinctively yours.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-900 mb-1">500+</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">Dream Homes Delivered</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-900 mb-1">10+</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">Years of Brilliance</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3264&auto=format&fit=crop"
                                    alt="About Silver Storey"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Team Slider (Replaces static grid) */}
            <TeamSlider />

            {/* Our Process Section ("Add Pags" interpretation) */}
            <Section className="bg-gray-50 py-24">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">How We Work</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">Our Design Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
                                    <CardContent className="flex flex-col items-center text-center p-8 pt-10">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Video Gallery Section */}
            <div className="py-8">
                <VideoGallery />
            </div>

            {/* Call to Action */}
            <Section className="bg-black text-white py-24">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold">Ready to Write Your Story?</h2>
                        <p className="text-lg md:text-xl text-gray-400">
                            Let&apos;s collaborate to create a space that reflects your personality and lifestyle.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300"
                        >
                            Start Your Project
                        </a>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
