const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
const app = require("./app")
const logger = require("morgan")
const dbConnection = require("./helpers/dbConnection")

// Database connection
dbConnection()


const PORT = process.env.PORT || 3500
app.listen(PORT, () => console.log(`\n Our 🚀 ready for lunch at http://localhost:${PORT} on ${process.env.NODE_ENV} mode 💻 🚀`));