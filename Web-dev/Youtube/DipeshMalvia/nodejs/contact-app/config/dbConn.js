const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
exports.dbConn = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_LOCAL_URI);
    // console.log(con);
    console.log(
      `Database connection established \n HOST : ${con.connection.host} \n DB_NAME : ${con.connection.name}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
