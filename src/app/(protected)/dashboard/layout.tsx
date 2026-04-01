"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  text-white">
      <Header />
      <Sidebar />
      <main className="md:pl-64">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
