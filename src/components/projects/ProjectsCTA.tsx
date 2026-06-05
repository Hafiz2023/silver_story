"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsCTA() {
    return (
        <Section className="bg-neutral-50 py-32 relative overflow-hidden">
            {/* Minimalist decorative lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gray-200 to-transparent"></div>
            
            <Container className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">Inspired by what you see?</h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Every great space starts with a conversation. Let&apos;s discuss how we can transform your vision into reality.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-12 py-5 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all hover:-translate-y-2 hover:shadow-2xl duration-300"
                    >
                        Start Your Project
                    </Link>
                </motion.div>
            </Container>
        </Section>
    );
}
