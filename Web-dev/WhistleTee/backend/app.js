const express = require('express');
const app = express();

const cors = require("cors")
const logger = require("morgan")

// setup body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CORS middleware
app.use(cors())

// Logger middleware
app.use(logger("dev"))

// <============== Routers ==============>
// Gets user routes
// app.use("/api/v1/guest", require("./routes/guest.routes"))
// app.use("/api/v1/user", require("./routes/user.routes"))
// app.use("/novu", require("./routes/novu.routes"))

app.use("/provider", require("./routes/provider.routes"))
app.use("/consumer", require("./routes/consumer.routes"))

module.exports = app;
