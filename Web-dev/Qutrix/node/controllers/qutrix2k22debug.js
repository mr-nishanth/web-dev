const express = require('express');
const app = express();

const path = require('path');
// app.use("/qutrix/debug", express.static(path.join(__dirname, 'public')))
const home = (req, res) => {
    res.sendFile(path.join(__dirname, '..', "views", "debug", "index.html"));
}


module.exports = {
    home,
}