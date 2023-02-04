import mongoose, { Schema } from "mongoose";
const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
