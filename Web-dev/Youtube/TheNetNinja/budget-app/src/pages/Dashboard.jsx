import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// * Our Loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      Dashboard
      <h1>{userName}</h1>
    </div>
  );
};
export default Dashboard;
