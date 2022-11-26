const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000
// Database
require("./model/db")


// Middleware
app.use(express.json())
app.use(cors())
app.use("/api/tasks", require("./routes/routes"))


app.listen(process.env.PORT || PORT, (err) => {
    if (err) console.log(err)
    console.log(`Application listening on http://localhost:${process.env.PORT || PORT}`)
})