const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req?.headers?.authorization?.split(' ')[1];
        try {
            if (token) {
                const decoded = await jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findById(decoded?.id).exec();
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error('Not authorized, please try again');
        }
    } else {
        throw new Error('Please provide token');
    }
});

module.exports = authMiddleware;
