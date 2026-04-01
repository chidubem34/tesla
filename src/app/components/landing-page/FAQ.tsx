"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { RxCaretDown } from "react-icons/rx";


const faqItems = [
  {
    question: "How do I start investing?",
    answer:
      "Getting started is simple. Create an account, complete your profile verification, and you can start investing with as little as $500.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "Yes, we use military-grade encryption and follow strict regulatory compliance to ensure your assets and data are always protected.",
  },
  {
    question: "Can I withdraw at any time?",
    answer:
      "We offer flexible withdrawal options depending on your investment plan. Standard plans allow for monthly withdrawals with zero fees.",
  },
  {
    question: "What are the fees?",
    answer:
      "Our fees are among the lowest in the industry, ranging from 0.5% to 1.5% annually, depending on your portfolio size and strategy.",
  },
  {
    question: "Offer financial services?",
    answer:
      "Yes, our Premium and Institutional plans include 24/7 access to dedicated financial advisors and market analysts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper
    header="Frequently Asked Questions"
    subheader="Clear answers to common questions about investing with Tesla Holdings."
    pillText="Support Center"
    className="bg-[#050505] py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Accordion */}
        <div className="space-y-6 mb-24">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === index
                  ? "border-white/20 shadow-xl"
                  : "border-transparent hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-8 sm:p-8 flex items-center justify-between gap-6 group"
              >
                <span
                  className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-white"
                      : "text-white/80 group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-2xl sm:text-3xl transition-transform duration-500 transform ${
                    openIndex === index
                      ? "rotate-180 text-white"
                      : "text-white/40 rotate-0"
                  }`}
                >
                  <RxCaretDown />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-8 sm:px-10 pb-10 text-white/60 text-sm sm:text-base leading-relaxed max-w-4xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 sm:p-20 text-center shadow-2xl shadow-white/10 relative overflow-hidden border border-white/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />
          <div className="relative z-10">
            <h3 className="text-white text-2xl sm:text-4xl font-bold mb-6 tracking-tight">
              Still have questions?
            </h3>
            <p className="text-white/70 text-base sm:text-lg font-medium mb-12 max-w-xl mx-auto">
              Our award-winning support team is here to help you 24/7 with any
              inquiries you may have.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-500 text-white font-bold px-10 py-5 rounded-2xl text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
