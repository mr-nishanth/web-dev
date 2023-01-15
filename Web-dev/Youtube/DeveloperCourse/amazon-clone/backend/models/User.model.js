import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "guest"],
    default: "user",
  },
});

// Password hashing
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare the hashed password
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  const status = await bcrypt.compare(enteredPassword, this.password);
  return status;
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
