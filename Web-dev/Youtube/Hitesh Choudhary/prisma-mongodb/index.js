require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(cookieParser());

app.get('/', (req, res) => {});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});
