import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_LOCAL_URI)
  .then((con) => {
    console.log(`\n 🥭 Connected successfully  ${con.connection.host} 🥭 \n`);
    app.listen(process.env.PORT || 3600, () => {
      console.log(
        `\n 👉🚀 ready to lunch on port http://localhost:${process.env.PORT}  🚀\n`
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
