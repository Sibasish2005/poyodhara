"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/hero1.webp",
  "/hero2.webp",
  "/hero3.webp",
  "/hero4.webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full relative">
            <Image
              src={src}
              alt={`Poyodhara Drinking Water Slide ${index + 1}`}
              width={1920}
              height={1080}
              priority={index === 0}
              className="w-full h-auto object-contain"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 w-full flex justify-center gap-1.5 sm:gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-6 sm:w-8 h-2 sm:h-2.5 shadow-md"
                : "bg-white/50 w-2 sm:w-2.5 h-2 sm:h-2.5 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
