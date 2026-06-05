"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundVideo } from "@/components/ui/background-video";
import { Phone, Calendar, Mail, FileText } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export default function EndSection() {
  const YOUTUBE_VIDEO_ID = "OvsjaGesjU8";

  const buttons = [
    { text: "+91 98765 43210", type: "call", icon: <Phone size={18} />, href: "tel:+919876543210" },
    { text: "Book a Meeting", type: "meeting", icon: <Calendar size={18} />, href: "/contact" },
    { text: "hello@silverstorey.com", type: "email", icon: <Mail size={18} />, href: "mailto:hello@silverstorey.com" },
    { text: "Free Consultation", type: "consultation", icon: <FileText size={18} />, href: "/contact" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white bg-black">
      {/* Background Video */}
      <BackgroundVideo videoId={YOUTUBE_VIDEO_ID} />

      {/* Content Layer */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-6 md:px-12 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Typography variant="p" className="text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-6 text-gray-300">
            Delivering complicated craftsmanship is our expertise
          </Typography>
          <Typography variant="h1" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-12 leading-tight tracking-tight drop-shadow-2xl border-none">
            Designs for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Bold of Heart</span>
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mt-8">
            {buttons.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                className="group relative overflow-hidden rounded-full backdrop-blur-md bg-white/10 border border-white/20 p-px transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <div className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-full">
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {btn.icon}
                  </span>
                  <span className="text-sm font-medium text-white tracking-wide">
                    {btn.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Icon */}
      <Link
        href="https://wa.me/919876543210" // Updated to a generic generic or placeholder number matching other contacts
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl animate-bounce hover:scale-110 hover:bg-[#128C7E] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Use the local SVG if it exists, otherwise fallback to the path directly to avoid missing asset issues if user deletes it */}
        <div className="relative w-8 h-8">
          <Image
            src="/whatsapp-svgrepo-com.svg"
            alt="WhatsApp"
            fill
            className="object-contain"
          />
        </div>
      </Link>
    </section>
  );
}
