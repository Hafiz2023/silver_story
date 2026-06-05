"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsHero() {
    return (
        <div className="relative h-[50vh] min-h-[400px] w-full bg-black flex items-center justify-center overflow-hidden">
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=3000&auto=format&fit=crop"
                    alt="Projects Hero"
                    fill
                    className="object-cover opacity-50"
                />
            </motion.div>
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider drop-shadow-xl">Our Portfolio</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light drop-shadow-md">
                        A curated collection of our finest work across residential, commercial, and hospitality sectors.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
