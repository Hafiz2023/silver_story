// app/ui/ConsultationAndBrands.tsx
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define a type for brand logos
interface BrandLogo {
  id: string;
  name: string;
  src: string;
}

// Data for the brand logos
const brandLogos: BrandLogo[] = [
  { id: "evara", name: "Evara", src: "/pic.svg" },
  { id: "kohler", name: "Kohler", src: "/pic2.svg" },
  { id: "ebco", name: "Ebco", src: "/pic3.svg" },
  { id: "greenply", name: "Greenply", src: "/pic4.svg" },
  { id: "hettich", name: "Hettich", src: "/pic5.svg" },
  { id: "havells", name: "Havells", src: "/pic6.svg" },
  { id: "asianpaints", name: "Asian Paints", src: "/pic7.svg" },
  { id: "adil", name: "Adil", src: "/pic4.svg" },
  { id: "amin", name: "Amin", src: "/pic5.svg" },
  { id: "ali", name: "Ali", src: "/pic6.svg" },
  { id: "tayyab", name: "Tayyab", src: "/pic7.svg" },
];

export default function ConsultationAndBrands() {
  const [index, setIndex] = useState(0);

  const itemsPerSlide = 6; // Show 6 logos at a time
  const totalSlides = Math.ceil(brandLogos.length / itemsPerSlide);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  // Navigate manually
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  // Slice the logos for current slide
  const currentLogos = brandLogos.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="bg-gray-50 pt-16 md:pt-24 pb-16 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-white transform -translate-y-full rounded-b-[50%] lg:rounded-b-[200%]" />

      <div className="container mx-auto px-4 text-center">
        {/* Consultation Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Book your free Consultation
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          It&apos;s time to live your dreams!
        </p>
        <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-300">
          Book Now
        </button>

        {/* Separator */}
        <div className="my-24 md:my-32 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-px h-full bg-gray-300"></div>
          </div>
        </div>

        {/* Brands Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800">
          Our Preferred Global Brands
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Logos (Animated) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            >
              {currentLogos.map((brand) => (
                <div
                  key={brand.id}
                  className="w-24 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    sizes="150px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
