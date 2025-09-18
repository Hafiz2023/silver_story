"use client";

import React from "react";

export default function EndSection() {
  const YOUTUBE_VIDEO_ID = "OvsjaGesjU8"; // Video ID only

  const buttons = [
    { text: "+92339 4078880", type: "call" },
    { text: "Book a Meeting", type: "meeting" },
    { text: "adilamin374@.com", type: "email" },
    { text: "Book Free Consultation", type: "consultation" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-6 md:px-12">
        <p className="text-sm md:text-base font-light uppercase tracking-widest mb-6 max-w-lg leading-relaxed">
          Delivering complicated craftsmanship is our expertise
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-12 leading-tight tracking-tight">
          Designs for the Bold of Heart
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md mx-auto">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className="w-full sm:w-64 py-3 px-6 bg-white/20 backdrop-blur-sm border border-gray-400 rounded-full text-white text-base font-medium hover:bg-white/30 transition-all duration-300 ease-in-out"
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
