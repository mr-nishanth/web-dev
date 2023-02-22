const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      trim: true,
      unique: [true, "This email is already registered"],
      validate: [validator.isEmail, "Please enter valid email address"],
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      select: false,
      minlength: [6, "Your password must be longer than 6 characters"],
      required: [true, "Please enter your password"],
    },
    avatar: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
