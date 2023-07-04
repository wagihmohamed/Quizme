import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { Quizes } from "@/models/Quize";

export const GET = async () => {
  try {
    await connect();

    const quizes = await Quizes.find();

    return new NextResponse(quizes as any, { status: 200 });
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
};
