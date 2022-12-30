const Provider = require('../model/provider.models')
const moment = require('moment')
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
    const { providerName, golfName, coordinates, price, numberOfSlots, selectedDate } = req.body
    if (!providerName || !golfName || !coordinates || !price || !numberOfSlots || !selectedDate) {
        return res.status(400).json({ success: false, message: "All fields required" })
    }
    const longCoordinates = parseFloat(coordinates.split(",")[0])
    // console.log(longCoordinates)
    const latCoordinates = parseFloat(coordinates.split(",")[1])
    // console.log(latCoordinates)
    const splitCoordinates = [longCoordinates, latCoordinates]
    // console.log(splitCoordinates)
    // console.log("selectedDate", typeof selectedDate)
    // console.log("selectedDate IST", new Date(selectedDate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' }))
    console.log(req.body);

    // let dateConverter = new Date(selectedDate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })
    // console.log("dateConverter", typeof dateConverter)
    // let dateConverter = moment(selectedDate).format()
    // let dateConverter = moment(moment(selectedDate).format()).toDate()
    let dateConverter = moment(moment(selectedDate).add(5, "hours").add(30, "minutes")).toDate()

    // dateConverter = new Date(dateConverter)
    console.log("dateConverter", dateConverter)
    // console.log("dateConverter", new Date(dateConverter))
    console.log("dateConverter TYPE", typeof dateConverter)
    // console.log("dateConverter TYPE", typeof new Date(dateConverter))

    // let nisha = Date.parse(dateConverter)
    // console.log("Nisha", nisha)
    // console.log("Nisha Type : ", typeof nisha)

    try {
        const newProvider = await Provider.create(
            {
                providerName,
                golfName,
                location: { coordinates: splitCoordinates },
                price: parseFloat(price),
                numberOfSlots: parseInt(numberOfSlots),
                // selectedDate: new Date(dateConverter)
                selectedDate: dateConverter
            }
        )
        const provider = await newProvider.save()
        return res.status(200).json({ success: true, provider, message: "Provider whistle added successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
exports.updateProvider = (req, res) => { }
exports.deleteProvider = (req, res) => { }