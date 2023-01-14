import mongoose from "mongoose";
mongoose.set("strictQuery", true);
export const dbConnection = async () => {
  // const MONGO_URI = process.env.MONGO_LOCAL_URI;
  const MONGO_URI = process.env.MONGO_ATLAS_URI;
  try {
    const res = await mongoose.connect(MONGO_URI);
    console.log(
      `Database connection established \n HOST: ${res.connection.host} \n DATABASE: ${res.connection.name}\n`
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
