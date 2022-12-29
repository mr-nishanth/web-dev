const mongoose = require('mongoose');
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
const providerSchema = new mongoose.Schema({
    providerName: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Provider Name is required"]
    },
    golfName: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Golf Course Name is required"]
    },
    location: {
        type: pointSchema,
        required: [true, "Location is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    numberOfSlots: {
        type: Number,
        required: [true, "Slot is required"]
    },
    selectedDate: {
        type: Date,
        min: Date.now(),
        required: [true, "Ticket date and time is required"]
    }
})

// Create Index
providerSchema.index({ location: '2dsphere' });

const ProviderModel = mongoose.model("Provider", providerSchema)
module.exports = ProviderModel