require('dotenv').config();
const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ?? 3500;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
