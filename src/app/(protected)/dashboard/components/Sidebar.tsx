"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "@/app/components/landing-page/AppLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const base = "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium";
const activeBase = "bg-black border border-white text-white font-semibold";
const navItems = [
  { href: "/dashboard", label: "Dashboard", active: "bg-black border border-white text-white font-semibold" },
  { href: "/dashboard/transactions", label: "Transactions" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = pathname || "/dashboard";

  return (
    <>
      {/* Mobile Hamburger */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-3 left-3 z-50 md:hidden p-2 rounded-lg shadow-lg border border-gray-200"
          aria-expanded={open}
          aria-label="Open sidebar"
        >
          <RxHamburgerMenu size={24} />
        </button>
      )}

      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <section
        className={`fixed top-0 left-0 h-full w-64 backdrop-blur-2xl bg-white/5 border-r border-gray-200 z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <AppLogo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="md:hidden rounded-lg border border-gray-300 p-2 text-white"
            aria-label="Close sidebar"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2">
          {navItems.map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              className={`${base} ${current === href ? active || activeBase : "text-white hover:bg-white/20"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
