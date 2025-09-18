// app/ui/StatsSection.tsx
"use client"; // This directive marks this as a Client Component

import React from "react";
import CountUp from "react-countup"; // Import react-countup

interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix?: string; // Optional suffix for values like '+'
}

const stats: StatItem[] = [
  { id: "1", value: 60, label: "Satisfactory Customers", suffix: "+" },
  { id: "2", value: 50000, label: "Square Feet Transformed" },
  { id: "3", value: 30, label: "Expert Team Members", suffix: "+" },
  { id: "4", value: 15, label: "Years of Experience" },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100"> {/* Responsive padding and background */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"> {/* Responsive grid */}
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-4">
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5} // Animation duration in seconds
                  separator="," // Adds comma for thousands
                  suffix={stat.suffix}
                  enableScrollSpy={true} // Starts counting when component enters viewport
                  scrollSpyOnce={true} // Counts only once
                />
              </h2>
              <p className="text-lg text-gray-600 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
