const User = require("../models/User")
const Note = require("../models/Note")

const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")

/**
 * @desc Get all users
 * @route GET /users
 * @access Private
 */
const getAllUsers = asyncHandler(
    async (req, res) => {
        const users = await User.find().select("-password").lean()
        if (!users) {
            return res.status(400).json({ message: "No users found" })
        }
        return res.status(200).json(users)
    }
)


/**
 * @desc Create a new user
 * @route POST /users
 * @access Private
 */
 const createNewUser = asyncHandler(
    async (req, res) => {
        const { username, password, roles } = req.body

        // Confirm data
        if (!username || !password || !Array.isArray(roles) || !roles.length) {
            return res.status(400).json({ message: "All fields must be provided" })
        }

        // Check for existing users
        const duplicate = await User.findOne({ username }).lean().exec()

        if (duplicate) {
            return res.status(409).json({ message: "User already exists" })
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10) // 10 = salt rounds

        const userObject = {
            username,
            "password": hashPassword,
            roles
        }

        // Create and store new user
        const user = await User.create(userObject)

        if (user) {
            // created
            res.status(201).json({
                message: `New user ${username} created`
            })
        } else {
            // not created
            res.status(400).json({
                message: "Invalid user data received"
            })
        }


    }
)


/**
 * @desc Update a user
 * @route PATCH /users
 * @access Private
 */
const updateUser = asyncHandler(
    async (req, res) => {

    }
)


/**
 * @desc Delete a user
 * @route DELETE /users
 * @access Private
 */
const deleteUser = asyncHandler(
    async (req, res) => {

    }
)

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}