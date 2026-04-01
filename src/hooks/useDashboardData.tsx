"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export interface Holding {
  symbol: string;
  shares: number;
  averagePrice: number;
}

export function useDashboardData() {
  const { user, profile } = useAuth();
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [loading, setLoading] = useState(true);

  // Mocked/Hardcoded price for now. 
  // In a real app, this would come from an API or a Firestore 'prices' collection.
  const TSLA_PRICE = 180.00;

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    // Listen for real-time holdings
    const q = query(collection(db, "holdings"), where("userId", "==", user.uid));
    const unsub = onSnapshot(q, (snap) => {
      const hData: Holding[] = snap.docs.map((doc) => doc.data() as Holding);
      setHoldings(hData);
      setLoading(false);
    }, (error) => {
      console.error("Dashboard Data error:", error);
      setLoading(false);
    });

    return () => unsub();
  }, [user]);

  // Calculations
  const balance = profile?.balance || 0;
  
  const portfolioValue = holdings.reduce((acc, h) => {
    // Current value based on hardcoded price
    return acc + (h.shares * TSLA_PRICE);
  }, 0);

  const totalCost = holdings.reduce((acc, h) => {
    return acc + (h.shares * h.averagePrice);
  }, 0);

  const gainLoss = portfolioValue - totalCost;

  return {
    portfolioValue,
    gainLoss,
    balance,
    loading
  };
}
