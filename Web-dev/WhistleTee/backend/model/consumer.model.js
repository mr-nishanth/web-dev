const mongoose = require('mongoose');
const moment = require('moment');
const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        // enum: ['Point'],
        // required: true
        default: "Point"
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const consumerSchema = new mongoose.Schema({
    consumerName: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Consumer Name is required"]
    },
    location: {
        type: pointSchema,
        trim: true,
        required: [true, "Location is required"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Email is required"],
        unique: [true, "Email must be in unique"]
    },
    mobileNumber: {
        type: String,
        trim: true,
        required: [true, "Mobile is required"]
    },
    alertRadius: {
        type: Number,
        trim: true,
        default: 2
    },
    expireTime: {
        type: Date,
        trim: true,
        default: moment().add(1, 'day').toDate()
    },

})

// const tomorrow = moment().add(1, 'day').toDate();
// const tomorrowPlusOneDay = moment().add(2, 'day').toDate();

// Create Index
consumerSchema.index({ location: '2dsphere' });

const ConsumerModel = mongoose.model("Consumer", consumerSchema)
module.exports = ConsumerModel