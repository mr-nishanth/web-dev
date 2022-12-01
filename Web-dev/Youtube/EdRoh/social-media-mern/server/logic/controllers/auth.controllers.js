import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.model"

/* REGISTER USER */
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            location,
            friends,
            occupation,
        } = req.body

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            location,
            friends,
            occupation,
            viewedProfilers: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        })

        const savedUser = await newUser.save();

        res.status(201).json(savedUser)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ msg: "User does not exist." })

        // password (user enter), user.password (database password)
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." })

        // create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        // prevent to send password for Frontend
        delete user.password
        res.status(200).json({ token, user })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}