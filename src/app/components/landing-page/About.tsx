"use client";

import Image from "next/image";
import innovation from "@/assets/images/innovation2.jpg";
import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper
      className="bg-[#070707] py-16 sm:py-24 lg:py-8 text-white"
      header="Built for smarter investing"
      pillText="About"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              We make investing
              <span className="block text-white/60">
                simple, clear, and powerful
              </span>
            </h2>

            <p className="text-white/60 text-lg mb-8 max-w-lg">
              Our platform is designed to help you grow your wealth with
              confidence. From real-time insights to intuitive tools,
              everything is built to give you full control over your
              financial future.
            </p>

            {/* FEATURES */}
            <div className="space-y-2">
              {[
                "Real-time portfolio tracking",
                "Smart investment insights",
                "Secure and transparent system",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <p className="text-white/80 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 bg-red-500/10 blur-2xl rounded-3xl" />

            {/* Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <Image
                src={innovation}
                alt="Platform preview"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

              {/* Bottom text */}
              <div className="absolute bottom-0 p-6">
                <p className="text-white font-semibold text-lg">
                  Designed for real results
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}