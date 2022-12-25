const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const connectDB = async () => {
    const MONGO_URI = process.env.MONGODB_LOCAL
    console.log(`🥭 Database URI : ${MONGO_URI}`)

    const result = await mongoose.connect(MONGO_URI, {
        // useNewUrlParams: true,
        useUnifiedTopology: true
    }).then((result) => {
        // console.log(`MongoDB is connected to the host : ${result.connection.host}`)
        console.log(`\n MongoDB is connected to the host : ${result.connection.host} \n`)
    })

}

module.exports = connectDB