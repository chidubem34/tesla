"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
  allowedRole,
}: {
  children: React.ReactNode;
  allowedRole: "user" | "admin";
}) {
  const { user, loading, role } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/register";
    }
  }, [user, loading]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (!user) return null;

  if (!role) {
    return <p className="text-white">Fetching role...</p>;
  }

  if (role !== allowedRole) {
    window.location.href = "/register";
    return null;
  }

  return <>{children}</>;
}
