import dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes.routes";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
// ROUTES
app.use("/api/notes", notesRoutes);

// ERROR HANDLING
app.use((req, res, next) => {
  next(new Error("Path Not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  res.status(500).json({ error: errorMessage });
});

export default app;
