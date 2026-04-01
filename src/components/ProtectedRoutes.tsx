"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";

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

  useEffect(() => {
    if (!loading && role && role !== allowedRole) {
      window.location.href = "/register";
    }
  }, [role, allowedRole, loading]);

  if (loading) {
    return (
      <div className="flex mt-60 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!user) return null;

  if (!role) {
    return <p className="text-white">Fetching role...</p>;
  }

  if (role !== allowedRole) {
    return null;
  }

  return <>{children}</>;
}
