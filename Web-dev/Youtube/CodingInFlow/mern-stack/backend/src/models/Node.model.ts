import { InferSchemaType, model, Schema } from "mongoose";

const nodeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: { type: String },
  },
  { timestamps: true }
);

type Note = InferSchemaType<typeof nodeSchema>;

export default model<Note>("Note", nodeSchema);
