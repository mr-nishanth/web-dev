import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_LOCAL_URI;
  console.log(`\n 🥭 Database URI : ${MONGO_URI}`);
  const result = await mongoose
    .connect(MONGO_URI, {
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log(
        `\n MongoDB is connected to the host : ${result.connection.host} \n`
      );
    });
};
export default connectDB;
