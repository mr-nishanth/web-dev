import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      min: 3,
      max: 20,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      max: 50,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 8,
      max: 256,
      required: true,
    },
    isAvatarImageSet: {
      type: Boolean,
      default: false,
    },
    avatarImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

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
