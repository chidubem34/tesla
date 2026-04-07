"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiBank } from "react-icons/ci";
import { PiHandWithdraw } from "react-icons/pi";






interface Action {
  href: string;
  label: string;
  icon: React.ReactNode;
  alt: string;
}

const actions: Action[] = [
  { href: "/dashboard/buystock", label: "Buy Stocks", icon: <CiShoppingCart size={30} />, alt: "Buy Stocks" },
  { href: "/dashboard/sellstock", label: "Sell Stocks", icon: <AiOutlineDollarCircle size={30} />, alt: "Sell Stocks" },
  { href: "/dashboard/deposit", label: "Deposit", icon: <CiBank size={30} />, alt: "Deposit" },
  { href: "/dashboard/withdraw", label: "Withdraw", icon: <PiHandWithdraw size={30} />, alt: "Withdraw" },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-xl mb-6 sm:mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-3 sm:px-4 py-3 rounded-xl border border-white/20 transition-colors flex flex-col sm:flex-row items-center justify-center gap-2"
          >
            <div className="rounded-lg p-1 flex items-center justify-center w-8 h-8 shrink-0">
                {action.icon}
            </div>
            <span className="text-center sm:text-left text-sm sm:text-base">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
