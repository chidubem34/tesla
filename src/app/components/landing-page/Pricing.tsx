"use client";

import { plans } from "@/data/pricing";
import { FiCheck } from "react-icons/fi";
import SectionWrapper from "@/components/SectionWrapper";

export default function Pricing() {
  return (
    <SectionWrapper
      header="Choose Your Plan"
      subheader="Select the perfect plan for your investment journey"
      pillText="Pricing"
      id="pricing"
      className="bg-[#050505] text-white py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 backdrop-blur-xl border transition ${
                plan.recommended
                  ? "bg-white/10 border-red-400 scale-105"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.recommended && (
                <p className="text-red-400 text-sm mb-4 font-semibold">
                  MOST POPULAR
                </p>
              )}

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300">
                    <FiCheck />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition ${
                  plan.recommended
                    ? "bg-red-500 hover:bg-red-400/80"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
