import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
  },
  email: {
    type: String,
    required: [true, "Email must be provided"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password must be provided"],
    minLength: [true, "Password must be at least 6 characters"],
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
