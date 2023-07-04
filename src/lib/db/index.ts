import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SECRET || "");
  } catch (error) {
    throw new Error("Error connecting to database");
  }
};
