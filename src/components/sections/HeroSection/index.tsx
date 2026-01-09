"use client";

import { BackgroundVideo } from "@/components/ui/background-video";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";

export default function HeroSection() {
  const YOUTUBE_VIDEO_ID = "lpzEd8gpWVM";
  // BackgroundVideo handles the iframe loading safely on the client to avoid hydration errors.

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <BackgroundVideo videoId={YOUTUBE_VIDEO_ID} />

      {/* Content Layer */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
            <Image
              src="/logo.png"
              alt="Silver Storey Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <Typography variant="h6" className="uppercase tracking-[0.2em] text-gray-200">
            Introducing The Silver Storey Living
          </Typography>

          <Typography variant="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
            India’s Fastest Growing <br className="hidden md:block" /> Interior Design Brand
          </Typography>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-white/70">Scroll</span>
          {/* SVG Arrow if lucide is missing, or just a simple chevron */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
