import dotenv from "dotenv";
dotenv.config();
import env from "./utils/validateEnv";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
