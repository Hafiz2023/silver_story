"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { BackgroundVideo } from "@/components/ui/background-video";

export default function ContactHero() {
    const CONTACT_HERO_VIDEO = "lpzEd8gpWVM";

    return (
        <div className="relative w-full h-[60vh] overflow-hidden bg-black text-white">
            <BackgroundVideo videoId={CONTACT_HERO_VIDEO} />
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center bg-black/40">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Typography variant="h1" className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4 drop-shadow-lg text-white">
                        Get In Touch
                    </Typography>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        Let&apos;s build something extraordinary together.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
