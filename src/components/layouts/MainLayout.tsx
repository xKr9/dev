import React from "react";
import LeftFooter from "../footers/LeftFooter";
import Navbar from "../navbar/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#0a192f] relative min-h-screen pb-32 font-primary w-full font-default text-white">
      <Navbar />
      {children}
      <LeftFooter />
    </main>
  );
}
