"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { BackgroundVideo } from "@/components/ui/background-video";

export default function ServicesHero() {
    const SERVICES_HERO_VIDEO = "lpzEd8gpWVM"; // Reusing video or change if needed

    return (
        <div className="relative w-full h-[60vh] overflow-hidden bg-black text-white">
            <BackgroundVideo videoId={SERVICES_HERO_VIDEO} />
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center bg-black/40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
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
    );
}
