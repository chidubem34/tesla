"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import hero1 from "@/assets/images/hero1.png";
import { statsData } from "@/data/stats";

const heroImages = [hero1.src];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Tesla Background"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/80 " />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 via-transparent to-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-26 lg:py-32">
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Badge */}
          <div className="mb-6 sm:mb-8 animate-fade-in-down">
            <span className="inline-block bg-red-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-red-500/40">
              POWERED BY ELON MUSK&apos;S VISION
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight text-white drop-shadow-2xl">
            Invest in the Future of
            <span className="block text-red-500 mt-2">Transportation</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 font-regular max-w-3xl mx-auto px-4 leading-relaxed">
            Join thousands of investors who are shaping the future of
            sustainable transportation and energy innovation.
          </p>

          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
            <a
              href="/register"
              className="w-full sm:w-auto bg-red-500 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all transform hover:scale-105 shadow-md shadow-red-500/40"
            >
              Start Investing
            </a>
            <a
              href="/login"
              className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-base transition-all backdrop-blur-md bg-white/10 transform hover:scale-105"
            >
              Login
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-10 hover:bg-black/40 transition-all transform hover:-translate-y-1"
              >
                <div className="text-white text-lg sm:text-2xl lg:text-3xl font-bold mb-1">
                  {stat.value}
                </div>

                <div className="text-white/60 text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
