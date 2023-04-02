const jwt = require('jsonwebtoken');

const getJwtToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME ?? '7d',
    });
};

module.exports = getJwtToken;
