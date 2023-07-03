import { buttonVariants } from "@/components/ui/button";
import { NavSearch } from "@/components/ui/navSearch";
import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="mx-auto max-w-7xl pt-4 border-b-2 pb-3">
      <div className="flex justify-between items-center px-5">
        <Link
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
          href="/"
        >
          Quizme
        </Link>
        <div className="flex gap-6 items-center">
          <NavSearch />
          <Link
            href="/sign-up"
            className={buttonVariants({
              className: "rounded-full",
            })}
          >
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
};
