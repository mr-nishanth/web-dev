const dotenv = require("dotenv")
const path = require("path")
dotenv.config({ path: path.join(__dirname, "config", "config.env") })

const app = require("./app")
const connectDB = require("./helpers/databases")

const PORT = process.env.PORT || 4000

// Database connection
connectDB()


app.listen(PORT, () => console.log(`\n 🚀 is lunching at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`))