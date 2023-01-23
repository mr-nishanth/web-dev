import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Note from "./models/Node.model";
const app = express();

app.get("/", async (req, res) => {
  try {
    const notes = await Note.find().exec();
    res.status(200).json(notes);
  } catch (err) {
    console.error(err);
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).json({ error: errorMessage });
  }
});

export default app;
