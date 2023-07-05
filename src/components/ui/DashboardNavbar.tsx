import Image from "next/image";
import React from "react";
import Logo from "@/app/favicon.ico";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { NavAvatar } from "./NavAvatar";

export default function DashboardNavbar() {
  return (
    <div className="mx-auto max-w-8xl p-8 pt-4 border-b-2 pb-3">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center items-center sm:justify-between sm:items-center px-5">
        <Link href="/dashboard">
          <Image src={Logo} width={40} height={40} alt="Quizme" />
        </Link>
        <div className="flex gap-6 items-center">
          <ModeToggle />
          <NavAvatar />
        </div>
      </div>
    </div>
  );
}
