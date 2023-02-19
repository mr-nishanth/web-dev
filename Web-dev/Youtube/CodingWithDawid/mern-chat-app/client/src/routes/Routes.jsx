import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Register from "../pages/Register";

const Routes = () => {
  const {
    userData: { username, id },
  } = useContext(UserContext);

  if (username) {
    return <div>Logged in</div>;
  }

  return <Register />;
};
export default Routes;
