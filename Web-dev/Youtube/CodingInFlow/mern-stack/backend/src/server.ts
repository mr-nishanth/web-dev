// import "dotenv/config"
import app from "./app";
import env from "./utils/validateEnv";
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const PORT = env.PORT;

mongoose
  .connect(env.MONGO_LOCAL_URI)
  .then(() => {
    console.log(`\n 🥭🥭 MongoDB connected 🥭🥭`);
    app.listen(PORT, () => {
      console.log(`\n ✅ Server listening on port ${PORT} ✅`);
    });
  })
  // .catch(console.error)
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
