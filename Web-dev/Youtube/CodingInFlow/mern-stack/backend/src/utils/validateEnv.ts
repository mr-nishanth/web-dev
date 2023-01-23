import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";
export default cleanEnv(process.env, {
  MONGO_LOCAL_URI: str(),
  PORT: port(),
});
