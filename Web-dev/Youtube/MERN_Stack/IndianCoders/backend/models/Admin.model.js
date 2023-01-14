import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({});

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;
