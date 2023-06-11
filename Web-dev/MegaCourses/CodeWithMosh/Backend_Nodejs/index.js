const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

require('dotenv').config();
const config = require('config');
const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true })); // req.body [key1=value1&ke2y=value2]
app.use(express.static('public'));
app.use(helmet());

// Configuration
if (
    config.has('name') ||
    config.has('mail.host') ||
    config.has('mail.app_password') ||
    config.has('mail.mail_password')
) {
    console.log(`Environment : ${config.util.getEnv('NODE_ENV')}`);

    console.log(`Application Name : ${config.get('name')}`);
    console.log(`App Password : ${config.get('mail.app_password')}`);
    console.log(`Mail Server : ${config.get('mail.host')}`);
    console.log(`Mail Server Password : ${config.get('mail.mail_password')}`);
}

if (app.get('env') === 'development') {
    startupDebugger('Morgan enabled');
    app.use(morgan('dev'));
}

// DB Work
dbDebugger('Connecting to database');

const port = process.env.PORT ?? 3500;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
