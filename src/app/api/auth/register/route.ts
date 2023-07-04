import { connect } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  const { email, password, name } = await req.json();
  console.log({ email, password, name });

  await connect();
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({
    email,
    // password,
    password: hashedPassword,
    name,
  });
  try {
    await newUser.save();
    return new NextResponse("User created successfully", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
};
