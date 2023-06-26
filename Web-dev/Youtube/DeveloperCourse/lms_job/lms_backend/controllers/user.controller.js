const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/jwtToken');
const validateMongoDbID = require('../utils/validateMongoID');

/* Create a new user */
const registerUser = asyncHandler(async (req, res) => {
    /* Get the email from req.body and find whether a user with this email exists or not */
    const { email } = req.body;
    // Find the user with  this email get from req.body
    const existingUser = await User.findOne({ email: email }).exec();
    if (existingUser) throw new Error(`User already exists`);

    const user = await User.create(req.body);
    delete user.password;
    return res.status(200).json({
        status: true,
        message: 'User created Successfully',
        user,
    });
});

/*Login existing user*/
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user already exists
    const user = await User.findOne({ email: email }).exec();
    if (!user) throw new Error('Invalid Credentials');
    if (user && (await user.isPasswordMatched(password))) {
        res.status(200).json({
            status: true,
            message: 'Logged in successfully',
            // token: generateToken(user?._id),
            token: await user.generateJWTToken(),
            role: user?.roles,
            userName: user?.userName,
            userImage: user?.userImage,
        });
    }
});

// Get all Users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        if (!users?.length) {
            return res
                .status(404)
                .json({ status: true, message: 'User not found' });
        }
        return res.status(200).json({
            status: true,
            message: 'All users fetched successfully',
            counts: users?.length,
            users,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Update users profile

const updateUser = asyncHandler(async (req, res) => {
    const { _id: id } = req?.user;
    validateMongoDbID(id);
    try {
        const user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        }).exec();
        return res.status(200).json({
            status: true,
            message: 'Profile updated successfully',
            user,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// const getAllUsers = asyncHandler(async (req, res) => {
//     try {
//     } catch (error) {
//         throw new Error(error);
//     }
// });

module.exports = { registerUser, loginUser, getAllUsers, updateUser };
