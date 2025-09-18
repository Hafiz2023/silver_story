"use client";

import React from "react";

export default function WarrantySection() {
  const YOUTUBE_VIDEO_ID = "-xVW8qjZLPs"; // Replace with your actual YouTube video ID

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-screen-xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
          10 Years of Warranty!
        </h1>

        {/* How It Works Button */}
        <button className="px-8 py-3 border border-gray-400 rounded-full text-gray-700 text-base hover:bg-gray-50 transition-colors duration-300 mb-16">
          How It Works
        </button>

        {/* Features and Video Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Features */}
          <div className="space-y-10 text-left lg:text-right">
            <div className="flex flex-col lg:items-end">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Experience 3D Visualization
              </h3>
              <p className="text-base text-gray-600 max-w-sm lg:max-w-md">
                Experience 3D visualization of your project before it begins.
              </p>
            </div>
            <div className="flex flex-col lg:items-end">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Guarantee 45 Days Delivery
              </h3>
              <p className="text-base text-gray-600 max-w-sm lg:max-w-md">
                We ensure your order is delivered within 45 days period.
              </p>
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
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Price Match Guarantee
              </h3>
              <p className="text-base text-gray-600 max-w-sm lg:max-w-md">
                At the end of your Project, you pay exactly what we quote initially.
              </p>
            </div>
            <div className="flex flex-col lg:items-start">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Transparency In Every Step
              </h3>
              <p className="text-base text-gray-600 max-w-sm lg:max-w-md">
                Complete transparency throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
