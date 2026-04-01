"use client";

import Link from "next/link";
import AppLogo from "@/app/components/landing-page/AppLogo";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-3 left-3 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg border border-gray-200"
      >
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <section
        className={`fixed top-0 left-0 h-full w-64 bg-white/5 border-r border-gray-200 z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-4">
        <AppLogo />
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border-2 border-red-400/10 text-white font-semibold"
          >
            Dashboard
          </Link>

          <Link
            href="/transactions"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/20 font-medium transition-colors"
          >
            Transactions
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
          >
            Settings
          </Link>
        </nav>
      </section>
    </>
  );
}
