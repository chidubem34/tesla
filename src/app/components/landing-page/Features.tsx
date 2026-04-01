"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";

const features = [
  {
    title: "Real-time Analytics",
    description:
      "Track your investments with live data and clear insights that help you make better financial decisions.",
    icon: <IoAnalyticsOutline size={26} />,
  },
  {
    title: "Secure Platform",
    description:
      "Built with strong security standards to ensure your data and assets remain safe at all times.",
    icon: <LuShieldCheck size={26} />,
  },
  {
    title: "Growth Tracking",
    description:
      "Visualize your portfolio performance and monitor progress with intuitive tools and reports.",
    icon: <BsGraphUp size={26} />,
  },
];

const metrics = [
  { value: "25K+", label: "Active Users" },
  { value: "$120M+", label: "Assets Managed" },
  { value: "4.9★", label: "User Rating" },
];

export default function Features() {
  return (
    <SectionWrapper
      id="features"
      header="Everything you need to invest smarter"
      pillText="Features"
      subheader="Powerful tools designed to give you clarity, control, and confidence in every investment decision."
      className="bg-[#050505] py-20 sm:py-28 lg:py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition"
            >
              {/* ICON */}
              <div className="mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                  {feature.icon}
                </div>
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* METRICS STRIP */}
        <div className="border-t border-white/10 pt-10 flex flex-wrap justify-between gap-8">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-semibold text-white">
                {metric.value}
              </p>
              <p className="text-white/50 text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}