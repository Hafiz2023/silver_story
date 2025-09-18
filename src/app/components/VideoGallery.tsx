// app/ui/VideoGallery.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Define a type for your video data
interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string; // URL for the video thumbnail
  youtubeVideoId: string; // The ID of the YouTube video
}

// ✅ Dummy data (replace with your actual YouTube videos)
const videos: VideoItem[] = [
  {
    id: "1",
    title: "Luxury Kitchen Project",
    thumbnailUrl: "/tab/kitchen.png",
    youtubeVideoId: "dQw4w9WgXcQ", // Replace with real video ID
  },
  {
    id: "2",
    title: "Modern Bathroom Design",
    thumbnailUrl: "/tab/image2.png",
    youtubeVideoId: "abc123xyz",
  },
  {
    id: "3",
    title: "Elegant Living Room Setup",
    thumbnailUrl: "/tab/image3.png",
    youtubeVideoId: "def456uvw",
  },
  {
    id: "4",
    title: "Office Interior Inspiration",
    thumbnailUrl: "/tab/office.png",
    youtubeVideoId: "ghi789rst",
  },
  {
    id: "5",
    title: "Smart Bedroom Concept",
    thumbnailUrl: "/tab/bedroom.png",
    youtubeVideoId: "jkl321mno",
  },
];

export default function VideoGallery() {
  // Function to open YouTube video in a new tab
  const openVideo = (youtubeVideoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeVideoId}`, "_blank");
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Our Latest Projects
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="mySwiper video-gallery-swiper"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => openVideo(video.youtubeVideoId)}
              >
                {/* Thumbnail Image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-16 h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.396a.75.75 0 0 1 0 1.253l-5.397 3.598A.75.75 0 0 1 9.75 15.357V8.643a.75.75 0 0 1 1.077-.66l5.397 3.598Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <p className="text-lg font-semibold truncate">{video.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
