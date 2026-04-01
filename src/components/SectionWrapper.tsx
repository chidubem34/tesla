import React from "react";

interface SectionWrapperProps {
  pillText: string;
  header: string;
  subheader?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  pillText,
  header,
  subheader,
  children,
  id,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className}>
      <div className="text-center mb-16 lg:mb-20">
        <span className="inline-block bg-red-500/10 text-red-500 px-5 py-2 rounded-full text-sm font-semibold mb-3">
          {pillText}
        </span>

        <h2 className="py-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
          {header}
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
          {subheader}
        </p>
      </div>
      {children}
    </section>
  );
}
