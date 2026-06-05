"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ServicesWhyChooseUs() {
    const features = [
        {
            title: "Personalized Approach",
            desc: "Every project is unique. We tailor our process to fit your specific needs and preferences."
        },
        {
            title: "Premium Materials",
            desc: "We source only the finest materials to ensure longevity and timeless beauty."
        },
        {
            title: "Timely Delivery",
            desc: "We respect your time. Our project management ensures on-time completion, every time."
        }
    ];

    return (
        <Section className="bg-neutral-900 text-white py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            
            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mt-2"
                    >
                        Design Meets Perfection
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-neutral-800/50 backdrop-blur-sm border-neutral-700/50 text-white hover:bg-neutral-800 hover:-translate-y-2 transition-all duration-300 h-full">
                                <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
