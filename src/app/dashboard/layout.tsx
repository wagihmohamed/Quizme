"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { redirect } from "next/navigation";
import DashboardNavbar from "@/components/ui/DashboardNavbar";
import { Loader2 } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  return (
    <div className="h-screen w-full">
      <DashboardNavbar />
      {children}
    </div>
  );
}
