"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { CiLogout } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";



export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, profile, logout } = useAuth(); // profile comes from AuthContext

  return (
    <header className="bg-white/5 backdrop-blur-lg text-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-end">
        <div className="relative shrink-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center cursor-pointer gap-2 sm:gap-3 bg-white/20 border border-white/30 rounded-lg px-2 sm:px-4 py-2 transition-colors"
          >
            {/* Avatar */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold">
              {(profile?.displayName || user?.displayName || "U")[0]}
            </div>
            <span className="hidden sm:block text-white font-medium">
              {profile?.displayName || user?.displayName || "User"}
            </span>
            <RxCaretDown className="text-white" size={30}/>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-50 bg-black rounded-lg shadow-lg border border-gray-200 py-2">
              <a
                href="dashboard/settings"
                className="block px-4 py-2 text-white hover:text-gray-300"
              >
                Profile
              </a>
              <a
                href="dashboard/settings"
                className="block px-4 py-2 text-white hover:text-gray-300"
              >
                Account Settings
              </a>
              <hr className="my-2 border-gray-200" />
              <button
                onClick={logout}
                className="w-full cursor-pointer text-left px-4 py-2 text-lg text-red-500 hover:text-red-400"
              >
                <CiLogout className="inline-block mr-2" size={30} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
