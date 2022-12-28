const mongoose = require('mongoose');

const MONGO_LOCAL_URI = 'mongodb://localhost:27017/whistleTee'
mongoose.set('strictQuery', true);
const connectDB = async () => {
    const MONGO_URI = MONGO_LOCAL_URI
    console.log(`🥭 Database URI : ${MONGO_URI}`)
    const result = await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true
    }).then((result) => {
        console.log(`\n MongoDB is connected to the host : ${result.connection.host} \n`)
    })

}

connectDB()
const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateAndTime: {
        type: Date
    }
})


const providerModel = mongoose.model('Provider', providerSchema);
// 
const data = {
    name:"Nishanth Park",
    // dateAndTime: (new Date()).toISOString()
    // dateAndTime: (new Date())
    // dateAndTime: () => Date.now()
    dateAndTime:new Date("2022-12-30T01:00:00") 
}
const insertDate = async () => {
    try {
        const result = await providerModel.create(data)
        console.log(result);
    } catch (error) {
        console.log(error.message);        
    }
}
const displayDate = async () => {
    try {
        const allData = await providerModel.find()
        console.log(allData)
    } catch (error) {
        console.log(error.message)
    }
}

insertDate()

// displayDate()



// module.exports = providerModel

// providerModel.pre("save", () => {
    
// })