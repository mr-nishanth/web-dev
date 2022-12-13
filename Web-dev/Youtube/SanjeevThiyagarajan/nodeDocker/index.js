require("dotenv").config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, world!");
})
app.listen(PORT, () => console.log(`Application listening on http://localhost:${PORT}`));