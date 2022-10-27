require("dotenv").config()

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500

const { logger, logEvents } = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")

const cors = require("cors")
const corsOptions = require("./config/corsOptions")

// =========== Middleware ===========
app.use(logger)

app.use(cors(corsOptions))
app.use(express.json());


// Serve CSS File
app.use("/", express.static(path.join(__dirname, 'public')))

// =========== Routes ===========
app.use("/", require("./routes/root.routes"))

app.use("/qutrix/debug", require("./routes/qutrix2k22debug.routes"));

app.use("/qutrix/wordhunt", require("./routes/qutrix2k22wordhunt.routes"));

app.use("/qutrix/quiz", require("./routes/qutrix2k22quiz.routes"));


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

app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })

