const User = require("../model/user.model")
exports.createGolfTime = async (req, res, next) => {
    // console.log(req.body)
    try {
        const data = req.body
        if (!data) return res.status(400).json({ success: false, message: "Bad request" })
        const golfTime = await User.create(data)
        return res.status(201).json({ success: true, golfTime })
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }
}