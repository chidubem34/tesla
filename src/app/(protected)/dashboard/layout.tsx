"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="ml-64">
        {children}
      </main>
      <Sidebar />
    </>
  );
}
