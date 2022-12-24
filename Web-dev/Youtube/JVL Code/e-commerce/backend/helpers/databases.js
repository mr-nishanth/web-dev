const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const connectDB = async () => {
    const MONGO_URI = process.env.MONGODB_LOCAL
    console.log(`🥭 Database URI : ${MONGO_URI}`)
    try {
        const result = await mongoose.connect(MONGO_URI, {
            // useNewUrlParams: true,
            useUnifiedTopology: true
        })
        // console.log(`MongoDB is connected to the host : ${result.connection.host}`)
        console.log(`\n MongoDB is connected to the host : ${result.connection.host} \n`)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB