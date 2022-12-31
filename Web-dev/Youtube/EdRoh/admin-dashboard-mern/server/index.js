import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import clientRoutes from "./routes/client.routes.js"
import generalRoutes from "./routes/general.routes.js";
import managementRoutes from "./routes/management.routes.js";
import salesRoutes from "./routes/sales.routes.js";



const app = express()
const PORT = process.env.PORT || 4000

// ? CONFIGURATION
dotenv.config({ path: "./config/config.env" })
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)


// MONGOOSE SETUP
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_LOCAL_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => console.log(`\n 👉 🚀 is ready for lunch at http://localhost:${PORT} path \n`))
}).catch(err => console.log(err.message))



// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })
// mongoose.connection.on("connected", () => {
//     console.log("Mongoose connected!")
// }
// mongoose.set("useCreateIndex", true)
// mongoose.set("useFindAndModify", false)
// mongoose.set("useUnifiedTopology", true)
// mongoose.set("useFindAndModify", false)
