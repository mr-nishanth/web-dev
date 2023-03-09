import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import wave from "../assets/wave.svg";
import Nav from "../components/Nav";
// * Our Loader function
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <header>
        <Nav userName={userName} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <img src={wave} alt="Wave" />
      </footer>
    </div>
  );
};
export default Main;
