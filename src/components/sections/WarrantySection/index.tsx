"use client";

import React from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function WarrantySection() {
  const YOUTUBE_VIDEO_ID = "-xVW8qjZLPs"; // Replace with your actual YouTube video ID

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-screen-xl">
        {/* Main Heading */}
        <Typography variant="h1" className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
          10 Years of Warranty!
        </Typography>

        {/* How It Works Button */}
        <Button variant="outline" className="px-8 py-6 border border-gray-400 rounded-full text-gray-700 text-base hover:bg-gray-50 transition-colors duration-300 mb-16">
          How It Works
        </Button>

        {/* Features and Video Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Features */}
          <div className="space-y-10 text-left lg:text-right">
            <div className="flex flex-col lg:items-end">
              <Typography variant="h3" className="text-2xl font-bold mb-2 text-gray-800">
                Experience 3D Visualization
              </Typography>
              <Typography variant="p" className="text-base text-gray-600 max-w-sm lg:max-w-md mt-0">
                Experience 3D visualization of your project before it begins.
              </Typography>
            </div>
            <div className="flex flex-col lg:items-end">
              <Typography variant="h3" className="text-2xl font-bold mb-2 text-gray-800">
                Guarantee 45 Days Delivery
              </Typography>
              <Typography variant="p" className="text-base text-gray-600 max-w-sm lg:max-w-md mt-0">
                We ensure your order is delivered within 45 days period.
              </Typography>
            </div>
          </div>

          {/* Central Video */}
          <div className="w-full relative aspect-video shadow-2xl rounded-lg overflow-hidden mx-auto lg:mx-0 transform hover:scale-[1.02] transition-transform duration-300">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=1&modestbranding=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Features */}
          <div className="space-y-10 text-left">
            <div className="flex flex-col lg:items-start">
              <Typography variant="h3" className="text-2xl font-bold mb-2 text-gray-800">
                Price Match Guarantee
              </Typography>
              <Typography variant="p" className="text-base text-gray-600 max-w-sm lg:max-w-md mt-0">
                At the end of your Project, you pay exactly what we quote initially.
              </Typography>
            </div>
            <div className="flex flex-col lg:items-start">
              <Typography variant="h3" className="text-2xl font-bold mb-2 text-gray-800">
                Transparency In Every Step
              </Typography>
              <Typography variant="p" className="text-base text-gray-600 max-w-sm lg:max-w-md mt-0">
                Complete transparency throughout the entire process.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
