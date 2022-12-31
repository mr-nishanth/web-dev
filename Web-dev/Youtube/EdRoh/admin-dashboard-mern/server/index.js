import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import clientRoutes from "./routes/client.routes"
import generalRoutes from "./routes/general.routes"
import managementRoutes from "./routes/management.routes"
import salesRoutes from "./routes/sales.routes"

const app = express()
const PORT = process.env.PORT || 3000

// ? CONFIGURATION
dotenv.config()
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