import mongoose from "mongoose";

const { Schema } = mongoose;

const QuizeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export const Quizes = mongoose.model("Quizes", QuizeSchema);
