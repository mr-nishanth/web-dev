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
        
        // ?. optional chain  ES2020

        if (!users?.length) {
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
        const {id,username,roles,active,password} = req.body
        
        // Confirm data
        if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== "boolean") {
            return res.status(400).json({ message: "All fields are required" })
        }

        const user = await User.findById(id).exec()

        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        // Check for duplicate
        const duplicate = await User.findOne({username}).lean().exec()
        // Allow update to the original user
        if (duplicate && duplicate?._id.toString() !== id) {
            return res.status(409).json({ message: "Duplicate username" })
        }
        
        // Update user data
        user.username = username
        user.roles = roles
        user.active = active
        
        if(password){
            // hashPassword
            user.password = await bcrypt.hash(password,10)
        }
        
        const updatedUser  = await user.save()

        return res.json({message:`${updatedUser.username} updated`})

    }
)


/**
 * @desc Delete a user
 * @route DELETE /users
 * @access Private
 */
const deleteUser = asyncHandler(
    async (req, res) => {
        const {id} = req.body
        
        if (!id) {
            return res.status(400).json({ message: "No user id provided" })
        }

        // Check for if the user had notes
        const notes = await Note.findOne({user:id}).lean().exec()
        if(notes?.length){
            return res.status(400).json({message:"User has assigned notes"})
        }

        // Delete the user
        const user = await User.findById(id).exec()
        if(!user){
            return res.status(400).json({message:"User not found"})
        }

        const result = await user.deleteOne()
        // result hold the deleted user information
        const reply = `Username ${result.username} with ID ${result._id} deleted`

        res.status(200).json({message:reply})
    }
)

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}