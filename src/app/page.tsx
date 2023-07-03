import { NavBar } from "@/components/ui/NavBar";
import Image from "next/image";
import LandingImage from "/public/landing.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <NavBar />
      <main className="max-w-7xl mx-auto text-center">
        <div className="mt-16">
          <p className="text-primary/70 text-2xl">Explore QUIZME</p>
          <h1 className="text-primary text-6xl font-semibold mt-3">
            Test your knowledge <br /> with our quizes
          </h1>
        </div>
        <Image
          src={LandingImage}
          alt="Landing Image"
          className="mx-auto w-full h-[30rem]"
        />
        <div className="flex justify-center gap-10 items-center mt-10">
          <Link className={buttonVariants({
            size:'lg'
          })} href="/quiz">
            Explore Quizes
          </Link>
          <Link className={buttonVariants({
            size:'lg',
            variant:'destructive'
          })} href="/create">
            Create a Quiz
          </Link>
        </div>
      </main>
    </main>
  );
}
