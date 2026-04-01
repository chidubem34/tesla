"use client";

import Image from "next/image";
import { featuredServices, mainServices } from "@/data/services";
import SectionWrapper from "@/components/SectionWrapper";

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      className="bg-[#050505] py-20 sm:py-28 lg:py-32 text-white"
      header="What you can do on the platform"
      pillText="Services"
      subheader="Tools and services designed to help you invest smarter, manage risk, and grow consistently."
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* FEATURED (CLEAN IMAGE CARDS) */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="relative rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                width={800}
                height={600}
                src={service.image}
                alt={service.title}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition duration-300"
              >
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                    <Icon className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {service.perks.map((perk) => (
                    <li key={perk} className="text-red-500">• <span className="text-white/50">{perk}</span></li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
