const Consumer = require("../model/consumer.model")
exports.getAllConsumer = async (req, res) => {
    try {
        const allProvider = await Consumer.find().lean()
        if (!allProvider) return res.status(404).json({ success: false, message: "Provider not found" })
        return res.status(200).json({ success: true, allProvider })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
exports.createConsumer = async (req, res) => {
    const { providerName, golfName, location, price, numberOfSlots, selectedDate } = req.body
    if (!providerName || !golfName || !location || !price || !numberOfSlots || !selectedDate) {
        return res.status(400).json({ success: false, message: "All fields required" })
    }
    try {
        const newProvider = await Provider.create(
            {
                providerName,
                golfName,
                location: { coordinates: location },
                price,
                numberOfSlots,
                selectedDate
            }
        )
        const provider = await newProvider.save()
        return res.status(200).json({ success: true, provider })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
exports.updateConsumer = (req, res) => { }
exports.deleteConsumer = (req, res) => { }