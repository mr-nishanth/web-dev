import AppNavBar from "./components/AppNavBar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import PickOfTheWeek from "./components/PickOfTheWeek";

const App = () => {
  return (
    <>
      <AppNavBar />
      <Banner />
      <Menu />
      <PickOfTheWeek />
      <Contact />
      <div className="text-center my-3 text-primary small">
        Copyright 2023-2025
      </div>
    </>
  );
};
export default App;
