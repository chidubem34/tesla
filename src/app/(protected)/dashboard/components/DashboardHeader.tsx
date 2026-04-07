"use client";

import Link from "next/link";

interface DashboardHeaderProps {
  header: string;
  subheader?: string;
  showBackButton?: boolean;
  backHref?: string;
}

export default function DashboardHeader({
  header,
  subheader,
  showBackButton = false,
  backHref = "/dashboard",
}: DashboardHeaderProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold sm:text-lg lg:text-3xl text-white">
          {header}
        </h1>

        {showBackButton && (
          <Link
            href={backHref}
            className="ml-4 inline-block rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition-colors shadow-sm shadow-red-500/40"
          >
            Back
          </Link>
        )}
      </div>

      {subheader && (
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base">
          {subheader}
        </p>
      )}
    </section>
  );
}
