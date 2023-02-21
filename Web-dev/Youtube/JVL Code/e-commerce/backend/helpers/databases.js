const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = async () => {
  const MONGO_URI = process.env.MONGODB_LOCAL;
  console.log(`\n 🥭 Database URI : ${MONGO_URI}`);

  const result = await mongoose
    .connect(MONGO_URI, {
      // useNewUrlParams: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log(
        `\n MongoDB is connected to the host : ${result.connection.host} \n`
      );
    })
    .catch((err) => {
      console.log(`\n 🥭 Error : ${err.message} \n`);
      process.exit(1);
    });
};

module.exports = connectDB;
