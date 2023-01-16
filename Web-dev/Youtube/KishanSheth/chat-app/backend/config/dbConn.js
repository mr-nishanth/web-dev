import mongoose from "mongoose";
mongoose.set("strictQuery", true);
export const dbConnection = async (mode = "development") => {
  let MONGO_URI;
  if (mode === "production" || mode === "prod") {
    MONGO_URI = process.env.MONGO_ATLAS_URI;
  } else {
    MONGO_URI = process.env.MONGO_LOCAL_URI;
  }

  const MONGO_DYNAMIC_URI =
    process.env.NODE_ENV !== "production"
      ? process.env.MONGO_LOCAL_URI
      : process.env.MONGO_ATLAS_URI;

  try {
    const res = await mongoose.connect(MONGO_URI);
    console.log(
      `\n 🥭 Database ✅ \n 💻 MODE : ${process.env.NODE_ENV} \n 🔥 HOST: ${res.connection.host}  \n 📛 DATABASE: ${res.connection.name}\n `
    );
  } catch (error) {
    console.error(` \n 🥭 Database ❌ \n ${error.message}`);

    process.exit(1);
  }
};
