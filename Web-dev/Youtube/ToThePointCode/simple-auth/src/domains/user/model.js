const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      trim: true,
      unique: [true, "Email already exists"],
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please enter your password"],
      select: false,
    },
    token: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
