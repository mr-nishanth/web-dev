const Consumer = require("../model/consumer.model")
const moment = require('moment');
exports.getAllConsumer = async (req, res) => {
    try {
        const allConsumer = await Consumer.find().lean()
        if (!allConsumer) return res.status(404).json({ success: false, message: "Provider not found" })
        return res.status(200).json({ success: true, allConsumer })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
exports.createConsumer = async (req, res) => {
    const { consumerName, coordinates, email, mobileNumber, alertRadius, expireTime } = req.body
    console.log(req.body)
    if (!consumerName || !email || !coordinates || !mobileNumber || !alertRadius || !expireTime) {
        return res.status(400).json({ success: false, message: "All fields required" })
    }
    const longCoordinates = parseFloat(coordinates.split(",")[0])
    // console.log(longCoordinates)
    const latCoordinates = parseFloat(coordinates.split(",")[1])
    // console.log(latCoordinates)
    const splitCoordinates = [longCoordinates, latCoordinates]
    console.log(splitCoordinates)
    try {
        const newConsumer = await Consumer.create(
            {
                consumerName,
                email,
                mobileNumber,
                alertRadius: parseInt(alertRadius),
                expireTime: moment().add(parseInt(expireTime), 'hours').toDate(),
                location: { coordinates: splitCoordinates },

            }
        )
        const consumer = await newConsumer.save()
        return res.status(200).json({ success: true, consumer, message: "Consumer whistle added successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
exports.updateConsumer = (req, res) => { }
exports.deleteConsumer = (req, res) => { }