"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const YOUTUBE_VIDEO_ID = "lpzEd8gpWVM"; // Replace with your desired YouTube video ID

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-hidden="true"
        ></iframe>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
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

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="uppercase text-white text-sm md:text-base tracking-wider mb-4"
        >
          Introducing The Silver Storey Living
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-snug"
        >
          India’s Fastest Growing <br /> Interior Design Brand
        </motion.h1>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-8 z-10">
        <Link href="/menu">
          <Button variant="outline" size="lg" className="rounded-full px-6 transition transform hover:scale-110 hover:shadow-lg cursor-pointer">
            Menu
          </Button>
        </Link>

        <div className="flex items-center gap-6 text-white">
          <Link href="https://facebook.com" target="_blank">
            <Facebook className="w-6 h-6 hover:text-blue-500 transition transform hover:scale-125 cursor-pointer" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-blue-400 transition transform hover:scale-125 cursor-pointer" />
          </Link>

          <Button size="lg" className="rounded-2xl text-lg px-8 py-6 transition transform hover:scale-110 hover:shadow-lg cursor-pointer">
            Get Free Estimate
          </Button>

          <Link href="https://youtube.com" target="_blank">
            <Youtube className="w-6 h-6 hover:text-red-500 transition transform hover:scale-125 cursor-pointer" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram className="w-6 h-6 hover:text-pink-500 transition transform hover:scale-125 cursor-pointer" />
          </Link>
        </div>

        <Link href="/contact">
          <Button variant="default" size="lg" className="rounded-full px-6 transition transform hover:scale-110 hover:shadow-lg cursor-pointer">
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
}
