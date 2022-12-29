const mongoose = require('mongoose')

const novuSchema = new mongoose.Schema({
    todoHeading: {
        type: String,
        required: [true, "todo heading is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    }
})

const novuModel = mongoose.model("Novu", novuSchema)
module.exports = novuModel