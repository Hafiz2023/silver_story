"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function AboutCTA() {
    return (
        <Section className="bg-black text-white py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold">Ready to Write Your Story?</h2>
                    <p className="text-lg md:text-xl text-gray-400">
                        Let&apos;s collaborate to create a space that reflects your personality and lifestyle.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 hover:scale-105"
                    >
                        Start Your Project
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
