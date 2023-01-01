import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: [true, "Please add a text field"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
