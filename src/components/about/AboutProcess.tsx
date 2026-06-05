"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Layers, Lightbulb, PenTool } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutProcess() {
    return (
        <Section className="bg-gray-50 py-24">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">How We Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">Our Design Process</h2>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {processSteps.map((step) => (
                        <motion.div key={step.id} variants={itemVariants}>
                            <Card className="h-full border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 bg-white">
                                <CardContent className="flex flex-col items-center text-center p-8 pt-10">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
