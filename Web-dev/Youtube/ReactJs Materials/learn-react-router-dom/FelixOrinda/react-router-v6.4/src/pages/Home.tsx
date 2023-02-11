import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const state = useLocation().state;
  console.log({ state });
  const navigate = useNavigate();
  // navigate("/dashboard", { state: { from: "/home" } });
  // navigate("/about");

  return <div>Home</div>;
};
export default Home;
