"use client";

import { useAuth } from "@/context/AuthContext";
import StatsCards from "./components/StatsCards";
import DashboardHeader from "./components/DashboardHeader";

export default function DashboardPage() {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen bg-[#050505] px-4 py-3 text-white sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-8">
        <DashboardHeader
          header={`Welcome to your dashboard, ${profile?.displayName || user?.displayName}`}
          subheader=" Your latest portfolio summary is below."
        />

        <section>
          <StatsCards />
        </section>
      </div>
    </div>
  );
}
