"use client";

import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useAuth } from "@/context/AuthContext";

export default function PortfolioChart() {
  const { user } = useAuth();
  const [portfolioValue, setPortfolioValue] = useState<number>(0);
  const [initialBalance, setInitialBalance] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);

  // Fetch initial balance from Firestore
  useEffect(() => {
    const fetchBalance = async () => {
      if (!user) return;
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const balance = snap.data().balance || 0;
        setPortfolioValue(balance);
        setInitialBalance(balance);
        setHistory([balance]);
      }
    };
    fetchBalance();
  }, [user]);

  // Simulate small floating changes and update Firestore
  useEffect(() => {
    if (!user || portfolioValue === 0) return;

    const interval = setInterval(async () => {
      // Change within ±1% of current value, capped to ±10
      const maxChange = Math.min(portfolioValue * 0.01, 10);
      const change = (Math.random() * (2 * maxChange) - maxChange).toFixed(2);
      const newValue = Math.max(portfolioValue + parseFloat(change), initialBalance);

      setPortfolioValue(newValue);
      setHistory((h) => [...h, newValue]);

      // Update Firestore balance
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, { balance: newValue });
    }, 5000);

    return () => clearInterval(interval);
  }, [user, portfolioValue, initialBalance]);

  // Chart rendering
  useEffect(() => {
    const ctx = document.getElementById("portfolioChart") as HTMLCanvasElement;
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: history.map((_, i) => i.toString()),
        datasets: [
          {
            label: "Portfolio Value",
            data: history,
            borderColor: "rgba(150,146,146,0.70)",
            backgroundColor: "rgba(100,96,96,0.539)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.1)" },
            ticks: { color: "#d1d5db" },
          },
          y: {
            grid: { color: "rgba(255,255,255,0.1)" },
            ticks: { color: "#d1d5db" },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [history]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-xl mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Portfolio Performance
          </h2>
          <p className="text-gray-300 text-sm">Historical value over time</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
          <span className="px-3 py-3 rounded-lg text-sm font-medium border border-white/30 bg-white/10 text-white">
            Live (seconds)
          </span>
        </div>
      </div>
      <div className="bg-white/10 rounded-lg border border-white/30 p-4 relative">
        <canvas id="portfolioChart"></canvas>
      </div>
      <p className="mt-4 text-white text-sm">
        Current Value: ${portfolioValue.toFixed(2)}
      </p>
    </div>
  );
}
