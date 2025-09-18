// app/ui/AllUnderOneRoof.tsx

import React from "react";
import {
  Home,
  Bath,
  Utensils,
  Building2,
  Sofa,
  Factory,
} from "lucide-react"; // lucide-react icons

// Define a type for your service items
interface ServiceItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

// Service data with icons + labels
const services: ServiceItem[] = [
  { id: "1", label: "Home", icon: <Home className="w-10 h-10 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" /> },
  { id: "2", label: "Bathroom", icon: <Bath className="w-10 h-10 text-purple-600 group-hover:text-purple-800 transition-colors duration-300" /> },
  { id: "3", label: "Kitchen", icon: <Utensils className="w-10 h-10 text-green-600 group-hover:text-green-800 transition-colors duration-300" /> },
  { id: "4", label: "Office", icon: <Building2 className="w-10 h-10 text-orange-600 group-hover:text-orange-800 transition-colors duration-300" /> },
  { id: "5", label: "Living Room", icon: <Sofa className="w-10 h-10 text-pink-600 group-hover:text-pink-800 transition-colors duration-300" /> },
  { id: "6", label: "Factory", icon: <Factory className="w-10 h-10 text-red-600 group-hover:text-red-800 transition-colors duration-300" /> },
];

export default function AllUnderOneRoof() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          All Under One Roof
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {service.icon}
              <p className="mt-4 text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
