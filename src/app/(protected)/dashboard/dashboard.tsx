"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user, profile } = useAuth();

  return (
    <>
      <div className="w-full flex justify-end">
        <div className="min-h-screen min-w-full bg-[#050505] text-white flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Welcome to your Dashboard,{" "}
            {profile?.displayName || user?.displayName}
          </h1>
        </div>
      </div>
    </>
  );
}
