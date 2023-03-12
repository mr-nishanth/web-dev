const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../env/local.env"),
});
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const { MONGO_LOCAL_URI } = process.env;

const connectToDB = async () => {
  try {
    const result = await mongoose.connect(MONGO_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected successfully ${result.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to database ${error.message}`);
    process.exit(1);
  }
};

connectToDB();
