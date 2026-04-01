"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // custom hook from AuthContext

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, profile, logout } = useAuth(); // profile comes from AuthContext

  return (
    <header className="bg-white/5 text-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-end">

        <div className="relative shrink-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 sm:gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-2 sm:px-4 py-2 transition-colors"
          >
            {/* Avatar */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3f6ae0] flex items-center justify-center text-white font-semibold">
              {(profile?.displayName || user?.displayName || "U")[0]}
            </div>
            <span className="hidden sm:block text-black font-medium">
              {profile?.displayName || user?.displayName || "User"}
            </span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <a
                href="/settings#profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings#account"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Account Settings
              </a>
              <hr className="my-2 border-gray-200" />
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
