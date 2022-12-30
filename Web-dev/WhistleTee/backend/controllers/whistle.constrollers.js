const Provider = require('../model/provider.models')
const Consumer = require('../model/consumer.model')

// const latitude = 28.626137;
// const longitude = 79.821602;
// maxDistance: distance * unitValue,
exports.getMatchWhistle = async (req, res) => {
    try {
        const matchWhistle = await Provider.find().lean().select({})
        console.log(matchWhistle)
        if (!matchWhistle) return res.status(404).json({ success: false, message: "Whistle not match" })
        return res.status(200).json({ success: true, matchWhistle })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

// const getlocations = await Consumer.find({conlocation:{$near:{$geometry:{coordinates:[77.40826246974768,11.46355871025176]},$maxDistance:1000,$minDistance:200}}});

const distance = 1;
const unitValue = 1000;
const dist = distance * unitValue

exports.getMatchConsumer = async (req, res) => {
    const { id } = req.params
    console.log("ID", id)
    if (!id) return res.status(404).json({ success: false, message: "ID not found" })
    try {

        const matchConsumer = await Provider.findOne({ _id: id }).lean().select({ location: 1, _id: 0 })
        // const matchConsumer = await Provider.findOne({ _id: id }, { _id: 0 })
        // if (!matchConsumer) return res.status(404).json({ success: false, message: "Consumer not found" })
        const coordinates = matchConsumer.location.coordinates
        const point = matchConsumer.location.type
        const getLocations = await Consumer.find({ location: { $near: { $geometry: { coordinates: coordinates }, $maxDistance: 5000, $minDistance: 0 } } });
        // console.log(getLocations)
        return res.status(200).json({ success: true, consumers: getLocations })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}