"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define a type for founder/team data
interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    bio?: string;
}

// Data for the team
const team: TeamMember[] = [
    {
        id: "1",
        name: "Piya Singh",
        role: "Co-Founder & Lead Designer",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2776&auto=format&fit=crop",
        bio: "With over 15 years of experience, Piya brings a distinct artistic vision to every project."
    },
    {
        id: "2",
        name: "Adil Ameen",
        role: "Co-Founder & Strategy Head",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2774&auto=format&fit=crop",
        bio: "Adil ensures that every design is not just beautiful but also executed to perfection."
    },
    // Adding more dummy members to demonstrate slider
    {
        id: "3",
        name: "Rohan Das",
        role: "Senior Architect",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
        bio: "Rohan specializes in sustainable and modern architectural solutions."
    },
    {
        id: "4",
        name: "Sneha Gupta",
        role: "Interior Stylist",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop",
        bio: "Sneha adds the final layer of magic with her impeccable styling skills."
    },
];

export default function TeamSlider() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                        Meet The Visionaries
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        The creative minds behind Silver Storey who turn your dreams into reality.
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="team-swiper pb-12"
                >
                    {team.map((member) => (
                        <SwiperSlide key={member.id} className="pb-10">
                            <div className="flex flex-col items-center group bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 h-full">
                                {/* Image Container */}
                                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill
                                        className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Info */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-center text-sm leading-relaxed">
                                    {member.bio || "Passionate about creating stunning living spaces."}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
