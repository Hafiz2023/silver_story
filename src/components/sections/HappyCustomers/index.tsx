// app/ui/HappyCustomers.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typography } from "@/components/ui/typography";

// Define a type for your testimonial items
interface TestimonialItem {
  id: string;
  text: string;
  name: string;
  avatar: string;
  role: string;
}

// Testimonials Data
const testimonials: TestimonialItem[] = [
  {
    id: "1",
    text: "The team delivered exactly what they promised. The 45-day delivery guarantee was met without delays, and the final cost was exactly as quoted. Their commitment to transparency and quality is unmatched.",
    name: "John Doe",
    avatar: "/adil.jpg",
    role: "Entrepreneur",
  },
  {
    id: "2",
    text: "I am thrilled with the exceptional service and stunning design. Their 3D visualization allowed me to see my dream home before it was built. Truly commendable professionalism and transparency.",
    name: "Piya Singh",
    avatar: "/piya.png",
    role: "Architect",
  },
  {
    id: "3",
    text: "From start to finish, my experience was fantastic. The complimentary 3D visualization gave me confidence in the design. I highly recommend their services for anyone seeking reliable interior design.",
    name: "Amit Kumar",
    avatar: "/adil.jpg",
    role: "Businessman",
  },
];

export default function HappyCustomers() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-screen-lg">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Typography variant="p" className="text-blue-600 text-sm uppercase tracking-widest font-semibold mb-3 mt-0">
            Happy Customers
          </Typography>
          <Typography variant="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug border-none">
            What they&apos;re saying
          </Typography>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white shadow-lg rounded-2xl px-6 py-10 md:px-10 md:py-12 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-500 max-w-3xl mx-auto">
                
                {/* Testimonial Text */}
                <Typography variant="p" className="text-base sm:text-lg md:text-xl text-gray-700 font-normal italic leading-relaxed mb-6 mt-0">
                  &ldquo;{testimonial.text}&rdquo;
                </Typography>

                {/* Author */}
                <div>
                  <Typography variant="h3" className="text-lg sm:text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="p" className="text-sm text-gray-500 mt-1">
                    {testimonial.role}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
