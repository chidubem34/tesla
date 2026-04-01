"use client";

import ProtectedRoute from "@/components/ProtectedRoutes";
import { useAuth } from "@/context/AuthContext";

export default function AdminDashboard() {
  const { user, profile } = useAuth();

  return (
    <ProtectedRoute allowedRole="admin">
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Admin Dashboard — Welcome {profile?.displayName || user?.displayName}
        </h1>
      </div>
    </ProtectedRoute>
  );
}
