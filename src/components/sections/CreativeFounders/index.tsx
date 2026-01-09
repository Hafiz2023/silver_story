// app/ui/CreativeFounders.tsx
import Image from "next/image";
import React from "react";

// Define a type for founder data
interface Founder {
  id: string;
  name: string;
  imageUrl: string;
}

// Data for the founders
const founders: Founder[] = [
  { id: "1", name: "Piya Singh", imageUrl: "/piya.png" },
  { id: "2", name: "Adil Ameen", imageUrl: "/adil.jpg" },
];

export default function CreativeFounders() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800 tracking-tight">
          Our Creative Founders
        </h2>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 justify-items-center">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-2xl object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Founder Name */}
              <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                {founder.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
