"use client";

import { useDashboardData } from "@/hooks/useDashboardData";

export default function StatsCards() {
  const { portfolioValue, gainLoss, balance, loading } = useDashboardData();

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl p-6 border shadow-lg animate-pulse">
          <p className="text-sm text-gray-700">Portfolio Value</p>
          <p className="text-3xl font-bold text-gray-300">—</p>
        </div>
        <div className="bg-white rounded-xl p-6 border shadow-lg animate-pulse">
          <p className="text-sm text-gray-700">Total Gain/Loss</p>
          <p className="text-3xl font-bold text-gray-300">—</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mb-6 sm:mb-8">
      {/* Portfolio Value Card */}
      <div className="bg-white/10 rounded-xl p-6 border border-[#E5E7EB] shadow-lg">
        <p className="text-xl text-white mb-2">Portfolio Value</p>
        <p
          className={`text-3xl font-bold text-white mb-1 ${portfolioValue >= 0 ? "text-green-400" : "text-red-400"}`}
        >
          $
          {portfolioValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-md text-white">
          Available balance:{" "}
          <span className="text-green-500">
            {" "}
            ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        </p>
      </div>

      {/* Gain/Loss Card */}
      <div className="bg-white/10 rounded-xl p-6 border border-[#E5E7EB] shadow-lg">
        <p className="text-sm text-white mb-2">Total Gain/Loss</p>
        <p
          className={`text-3xl font-bold mb-1 ${
            gainLoss >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {gainLoss >= 0 ? "+" : ""}$
          {gainLoss.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-600">—</p>
      </div>
    </div>
  );
}
