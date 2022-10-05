require("dotenv").config()

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500

const { logger, logEvents } = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")

const cookieParser = require("cookie-parser")

const cors = require("cors")
const corsOptions = require("./config/corsOptions")

const connectDB = require("./config/dbConn")
const mongoose = require("mongoose");

// Database setup
connectDB()


// =========== Middleware ===========
app.use(logger)
// app.use(cors())
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser())


// Serve CSS File
app.use("/", express.static(path.join(__dirname, 'public')))

// =========== Routes ===========
app.use("/", require("./routes/root.routes"))

app.use("/users",require("./routes/user.routes"))

app.use("/notes",require("./routes/note.routes"))

app.all("*", (req, res) => {
    res.status(404)
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"))
    } else if (req.accepts("json")) {
        res.json({ message: "404 Not Found" })
    } else {
        res.type("txt").send("404 Not Found")
    }
})

// =========== Middleware ===========
app.use(errorHandler)

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})

mongoose.connection.on("error", (err) => {
     console.log(err)
     message=`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`
     logEvents(message,"mongoErrLog.log") 
})