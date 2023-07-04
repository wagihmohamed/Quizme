import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

// 987654321wagihW /// wegoo ///////////// mongodb+srv://wegoo:987654321wagihW@side.frygp60.mongodb.net/?retryWrites=true&w=majority
