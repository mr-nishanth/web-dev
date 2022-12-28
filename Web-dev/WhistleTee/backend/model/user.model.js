const mongoose = require('mongoose');
const validator = require('validator');

let GolfSchema = new mongoose.Schema({
    golfCourseName: {
        type: String,
        required: true,
        trim: true,
    },
    _coordinates: {
        type: [Number],
        index: '2dsphere',
        default: [0, 0],
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        default: 0
    },
    date: {
        type: Date,
        required: true,
        min: Date.now(),
    }
})

let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
        required: [true, `phone number is required`],
        unique: true,
        minLength: 7,
        maxLength: 15

    },
    email: {
        type: String,
        trim: true,
        required: [true, `email is required`],
        unique: [true, `email already exists`],
        lowercase: true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v)
            },
            message: props => `${props.value} is not a valid Email address!`,
        },
    },
    provider: {
        type: Boolean,
        required: true,
        default: false,
    },
    GolfWhistle: [GolfSchema],

}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)
module.exports = userModel