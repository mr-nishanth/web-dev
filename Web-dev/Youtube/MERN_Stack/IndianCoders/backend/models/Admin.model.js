import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a  password"],
    minLength: [6, "Password must be at least 6 characters"],
  },
  addedMovies: [
    {
      type: String,
    },
  ],
});

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;
