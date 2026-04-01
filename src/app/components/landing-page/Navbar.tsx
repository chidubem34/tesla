"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/tesla_trademark.png";
import { navLinks } from "@/data/navlinks";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="relative w-28 h-12 flex px-2 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
            <Image
              src={logo}
              alt="Tesla Logo"
              width={100}
              height={100}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) =>
            link.isButton ? (
              <a
                key={link.label}
                href={link.href}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-md transition-colors shadow-sm shadow-red-500/30"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-white font-medium text-md opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="md:hidden flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-0.5 bg-white rounded-sm transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white rounded-sm transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white rounded-sm transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[60px] sm:top-[80px] right-0 w-3/4 h-screen bg-black/95 backdrop-blur-2xl border-l border-white/20 z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl p-8 flex flex-col gap-6`}
      >
        {navLinks.map((link) =>
          link.isButton ? (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-red-500 text-white font-medium px-6 py-4 rounded-xl text-center shadow-lg shadow-red-500/30 hover:bg-red-700 transition"
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white font-medium text-lg border-b border-white/10 pb-2 hover:text-red-400 transition"
            >
              {link.label}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
