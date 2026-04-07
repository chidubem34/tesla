"use client";

import { useEffect } from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export default function Notification({
  message,
  type = "info",
  onClose,
}: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
        ? "bg-red-500"
        : "bg-blue-500";

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${bgColor} text-white! px-4 py-3 rounded-lg shadow-lg backdrop-blur-xl border border-white/20 animate-slide-in`}
      >
        {message}
      </div>
    </div>
  );
}
