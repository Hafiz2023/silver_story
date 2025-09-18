"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const YOUTUBE_VIDEO_ID = "wsQBs_QRexA"; // Replace with your YouTube video ID

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* YouTube Video Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&modestbranding=1&rel=0&showinfo=0`}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-hidden="true"
        ></iframe>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center mb-6"
          >
            <Image
              src="/logo.png"
              alt="Silver Storey Logo"
              width={80}
              height={80}
              className="mb-2"
            />
            <h2 className="text-white text-xl md:text-2xl font-medium tracking-wide">
              Silver Storey
            </h2>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg leading-snug"
          >
            DELIVERING COMPLICATED CRAFTSMANSHIP IS OUR EXPERTISE
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white text-lg md:text-2xl mt-4"
          >
            Designs for the <span className="font-bold">Bold of Heart</span>
          </motion.p>

          {/* Buttons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-4 mt-8 flex-wrap justify-center"
          >
            <Button className="rounded-full px-6 py-4 text-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-white hover:text-black">
              About Us
            </Button>
            <Button
              className="rounded-full px-6 py-4 text-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-white hover:text-black"
              variant="outline"
            >
              Our Services
            </Button>
            <Button className="rounded-full px-6 py-4 text-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-white hover:text-black">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
