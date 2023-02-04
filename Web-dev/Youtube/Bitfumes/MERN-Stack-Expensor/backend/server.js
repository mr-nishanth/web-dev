import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "config", "config.env") });
import app from "./app.js";
import dbConnection from "./helpers/dbConnection.js";

const PORT = process.env.PORT || 3500;

try {
  // Database connection
  dbConnection();
  app.listen(PORT, () =>
    console.log(
      `\n Our 🚀 ready for lunch at http://localhost:${PORT} on ${process.env.NODE_ENV} mode 💻 🚀`
    )
  );
} catch (error) {
  console.log(error.message);
  process.exit(1);
}
