const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const isAdmin = asyncHandler(async (req, res, next) => {
    const user = User.findById(req.user.id);
    if (user.roles !== 'admin') {
        return res.status(403).json({
            status: false,
            message: 'Forbidden, must be an administrator',
        });
    }
    next();
});

const isInstructor = asyncHandler(async (req, res, next) => {
    const user = User.findById(req.user.id);
    if (user.roles !== 'instructor') {
        return res.status(403).json({
            status: false,
            message: 'Forbidden, must be an Instructor',
        });
    }
    next();
});

module.exports = { isAdmin, isInstructor };
