import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [20, "Username cannot be more than 20 characters"],
      trim: [true, "Username cannot be empty"],
      unique: [true, "Username already exists"],
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters"],
      maxlength: [256, "Password cannot be more than 256 characters"],
      trim: [true, "Password cannot be empty"],
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
