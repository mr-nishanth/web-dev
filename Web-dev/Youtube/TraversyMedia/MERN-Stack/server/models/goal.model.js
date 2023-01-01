import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text field"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
