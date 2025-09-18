// app/page.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
  priceRange: string;
}

const categories: CategoryItem[] = [
  {
    id: "1",
    name: "Kitchen",
    imageUrl: "/tab/Kitchen.png",
    priceRange: "1.8 L Onwards",
  },
  {
    id: "2",
    name: "Bathroom",
    imageUrl: "/tab/image2.png",
    priceRange: "1.8 L Onwards",
  },
  {
    id: "3",
    name: "Living Room",
    imageUrl: "/tab/image3.png",
    priceRange: "2.4 L Onwards",
  },
  {
    id: "4",
    name: "Office",
    imageUrl: "/tab/office.png",
    priceRange: "2 L Onwards",
  },
  {
    id: "5",
    name: "Bedroom",
    imageUrl: "/tab/image4.png",
    priceRange: "2.2 L Onwards",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Explore Our Categories
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Category Card Component
interface CategoryCardProps {
  category: CategoryItem;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative w-full h-64">
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
        {category.name}
      </div>
      <div className="absolute bottom-4 left-4 text-white text-lg font-bold z-10">
        {category.priceRange}
      </div>
    </div>
  );
}
