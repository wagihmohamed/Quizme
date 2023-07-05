"use client";
import { buttonVariants } from "@/components/ui/button";
import { NavSearch } from "@/components/ui/navSearch";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useSession } from "next-auth/react";

export const NavBar = () => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <header className="mx-auto max-w-7xl p-8 pt-4 border-b-2 pb-3">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center items-center sm:justify-between sm:items-center px-5">
        <Link
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
          href="/"
        >
          Quizme
        </Link>
        <div className="flex gap-6 items-center">
          <ModeToggle />
          <NavSearch />
          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: "outline",
              })}
            >
              Create Quiz
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className={buttonVariants({
                className: "rounded-full",
              })}
            >
              Getting Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
