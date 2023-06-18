const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');

/* Create a new user */
const registerUser = asyncHandler(async (req, res) => {
    /* Get the email from req.body and find whether a user with this email exists or not */
    const { email } = req.body;
    // Find the user with  this email get from req.body
    const findUser = await User.findOne({ email: email }).exec();
    if (findUser) throw new Error(`User already exists`);

    const createUser = await User.create(req.body);

    return res
        .status(200)
        .json({
            status: true,
            message: 'User created Successfully',
            user: createUser,
        });
});

/*Login existing user*/
const loginUser = asyncHandler(async (req, res) => {});

module.exports = { registerUser };
