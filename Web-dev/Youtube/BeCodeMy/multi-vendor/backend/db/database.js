const mongoose = require("mongoose");

const connectDatabase = async () => {
  mongoose
    .connect(process.env.MONGODB_LOCAL_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`MongoDB connected with server ${con.connection.host}`);
    });
};

module.exports = connectDatabase;
