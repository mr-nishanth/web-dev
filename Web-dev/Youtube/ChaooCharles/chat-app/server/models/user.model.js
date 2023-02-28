const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: [3, "Name must be at least 3 characters long."],
      maxlength: [30, "Name must be less than 30 characters long."],
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      trim: true,
      minlength: [5, "Email must be at least 5 characters long."],
      maxlength: [255, "Email must be less than 255 characters long."],
      unique: [true, "Email already exists."],
      required: [true, "Email is required."],
    },
    password: {
      type: String,
      trim: true,
      minlength: [5, "Password must be at least 5 characters long."],
      maxlength: [1024, "Password must be less than 1024 characters long."],
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
