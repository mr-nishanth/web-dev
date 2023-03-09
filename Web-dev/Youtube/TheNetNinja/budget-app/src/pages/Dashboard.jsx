import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { fetchData } from "../helpers";
import { toast } from "react-toastify";

// * Our Loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// Action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  // console.log({ data, request });
  // const userName = data.get("userName");
  const formData = Object.fromEntries(data);
  // console.log({formData})
  // Save to local-storage
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome ${formData.userName} 👋`);
  } catch (error) {
    throw new Error("There was a problem creating your account.😔");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};
export default Dashboard;
