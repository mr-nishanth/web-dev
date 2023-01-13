const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a valid name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email"],
      unique: [true, "Email address already in exist"],
    },
    password: {
      type: String,
      required: [true, "Please provide a valid password"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
