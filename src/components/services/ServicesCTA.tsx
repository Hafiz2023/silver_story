"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesCTA() {
    return (
        <Section className="py-24 bg-white">
            <Container>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] p-12 md:p-20 text-center shadow-xl border border-gray-100"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Have a Project in Mind?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Whether it&apos;s a single room or an entire building, we&apos;re ready to bring your vision to life.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all hover:-translate-y-1 hover:shadow-xl duration-300"
                    >
                        Get a Free Consultation
                    </Link>
                </motion.div>
            </Container>
        </Section>
    );
}
