"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
    return (
        <Section className="py-20 md:py-28 bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <span className="block text-primary font-bold tracking-widest uppercase mb-2 text-sm">Who We Are</span>
                        <Typography variant="h2" className="mb-6 leading-tight text-4xl md:text-5xl font-bold text-gray-900">
                            We Don&apos;t Just Design Spaces, <br className="hidden md:block" /> We Craft Experiences.
                        </Typography>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Silver Storey was born out of a desire to redefine luxury living in India. We believe that a home is more than just four walls; it is a canvas where life happens, memories are made, and dreams take shape.
                            </p>
                            <p>
                                Our philosophy is simple: <strong className="text-gray-900 font-semibold">Listening is our greatest tool.</strong> We listen to your unspoken needs, your functional requirements, and your aesthetic aspirations to create a home that is distinctively yours.
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
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3264&auto=format&fit=crop"
                                alt="About Silver Storey"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
