const dotenv = require('dotenv').config();
const express = require('express');
const dbConnect = require('./configs/dbConnection');
const app = express();
const PORT = process.env.PORT ?? 5000;

app.listen(PORT, async () => {
    console.log(`Server listening on port : http://localhost:${PORT}`);
    await dbConnect();
});
