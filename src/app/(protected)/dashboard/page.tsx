import DashboardPage from "./dashboard";
import ProtectedRoute from "@/components/ProtectedRoutes";

export default function UserDashboardPage() {
  return (
    <div className="">
    <ProtectedRoute allowedRole="user">
      <DashboardPage />
    </ProtectedRoute>
    </div>
  );
}