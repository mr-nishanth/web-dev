import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

const userModel = mongoose.model("User", userSchema);

export default userModel;
