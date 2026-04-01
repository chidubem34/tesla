"use client";

import { useDashboardData } from "@/hooks/useDashboardData";

export default function StatsCards() {
  const { portfolioValue, gainLoss, balance, loading } = useDashboardData();

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
    <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {/* Portfolio Value Card */}
      <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-lg">
        <p className="text-sm text-gray-700 mb-2">Portfolio Value</p>
        <p className="text-3xl font-bold text-black mb-1">
          ${portfolioValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-600">
          Available to reinvest: ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Gain/Loss Card */}
      <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-lg">
        <p className="text-sm text-gray-700 mb-2">Total Gain/Loss</p>
        <p
          className={`text-3xl font-bold mb-1 ${
            gainLoss >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {gainLoss >= 0 ? "+" : ""}
          ${gainLoss.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-600">—</p>
      </div>
    </div>
  );
}
