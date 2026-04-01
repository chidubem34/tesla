"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { benefits } from "@/data/whyInvest";

export default function WhyInvest() {
  return (
    <SectionWrapper
      id="why-invest"
      className="bg-[#050505] py-20 sm:py-28 lg:py-32 text-white"
      header="Why choose our platform"
      pillText="Benefits"
      subheader="Everything is built to give you clarity, control, and confidence in your investment journey."
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition duration-300"
              >
                {/* ICON */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                    <Icon className="text-white text-xl" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-white text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}