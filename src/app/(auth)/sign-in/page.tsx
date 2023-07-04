"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";
import GoogleLogo from "/public/google-logo.svg";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2).max(50),
});

export default function SignIn() {
  const { push } = useRouter();
  const session = useSession();
  console.log("session", session);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutate: loginWithCredentials,
    isLoading,
    isError,
    data,
  } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      return await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    },
    onSuccess: (response) => {
      if (response?.error) {
        toast.error(response.error);
      } else {
        toast.success("Logged in successfully");
        push("/dashboard");
      }
    },
  });
  console.log("data", data);
  

  function onSubmit(values: z.infer<typeof formSchema>) {
    loginWithCredentials({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2 px-14 text-center sm:px-6 lg:px-8">
      {isError && <p className="text-red-500">Invalid credentials</p>}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 border-2 min-w-[500px] border-gray-800 rounded-xl p-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="John@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button isLoading={isLoading} size="lg" type="submit">
            Sign in
          </Button>
        </form>
        <Button
          // onClick={() => signIn("google")}
          onClick={() => signOut()}
          className="mt-4"
          size="lg"
          type="submit"
        >
          <Image
            className="mr-2"
            src={GoogleLogo}
            alt="Google Logo"
            width={24}
            height={24}
            priority={false}
          />
          Sign in with Google
        </Button>
        <div className="flex gap-2 mt-3">
          <p>Don&apos;t have an account? </p>
          <Link
            className="text-primary underline underline-offset-4 hover:underline"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
}
