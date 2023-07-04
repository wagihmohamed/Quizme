import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_SECRET_CLIENTID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        credentials: Record<"email" | "password", string> | undefined
      ) => {
        await connect();
        try {
          const user = await User.findOne({ email: credentials?.email });

          if (user) {
            const isValid = await bcrypt.compare(
              credentials?.password || "",
              user.password
            );

            if (isValid) {
              return user;
            } else {
              throw new Error("Make sure your password is correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          if (err instanceof Error) {
            throw err;
          } else {
            throw new Error("Invalid credentials");
          }
        }
      },
    }),
  ],
  pages: {
    error: "/sign-in",
  },
});

export { authOptions as GET, authOptions as POST };
