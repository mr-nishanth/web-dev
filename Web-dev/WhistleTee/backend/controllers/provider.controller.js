const Provider = require('../model/provider.models')
exports.getAllProvider = async (req, res) => {
    try {
        const allProvider = await Provider.find().lean()
        if (!allProvider) return res.status(404).json({ success: false, message: "Provider not found" })
        return res.status(200).json({ success: true, allProvider })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
exports.createProvider = async (req, res) => {
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
                selectedDate: new Date(selectedDate.$d).toISOString()
            }
        )
        const provider = await newProvider.save()
        return res.status(200).json({ success: true, provider })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
exports.updateProvider = (req, res) => { }
exports.deleteProvider = (req, res) => { }