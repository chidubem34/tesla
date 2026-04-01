"use client";

import {
  FiUserPlus,
  FiCreditCard,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";
import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  {
    title: "Create Account",
    description: "Sign up in minutes with a seamless onboarding process.",
    icon: FiUserPlus,
  },
  {
    title: "Fund Wallet",
    description: "Securely deposit funds using bank or card.",
    icon: FiCreditCard,
  },
  {
    title: "Invest Smart",
    description: "Choose strategies and start building wealth.",
    icon: FiTrendingUp,
  },
  {
    title: "Track Growth",
    description: "Monitor performance with real-time analytics.",
    icon: FiBarChart2,
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper 
    header="How It Works"
    subheader="Start Investing in Minutes"
    pillText="How It Works"
    className="bg-[#050505] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition duration-300"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                    <Icon className="text-white text-xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold mb-3">
                  {i + 1}. {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
