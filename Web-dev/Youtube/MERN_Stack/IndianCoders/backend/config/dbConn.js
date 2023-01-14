const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const dbConnection = async () => {
  const MONGO_LOCAL_URI = process.env.MONGO_LOCAL_URI;
  try {
    const res = await mongoose.connect(MONGO_LOCAL_URI);
    console.log(
      `Database connection established \n HOST: ${res.connection.host} \n DATABASE: ${res.connection.name}\n`
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = dbConnection;
