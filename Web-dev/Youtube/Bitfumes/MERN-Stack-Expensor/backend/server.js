const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const app = require("./app");
const dbConnection = require("./helpers/dbConnection");

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
