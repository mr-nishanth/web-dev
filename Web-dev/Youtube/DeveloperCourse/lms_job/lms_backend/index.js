const dotenv = require('dotenv').config();
const express = require('express');
const dbConnect = require('./configs/dbConnection');
const { notFound, handleError } = require('./middlewares/errorHandler');
const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', require('./routes/user.route'));

app.use(notFound);
app.use(handleError);
app.listen(PORT, async () => {
    console.log(`Server listening on port : http://localhost:${PORT}`);
    await dbConnect();
});
