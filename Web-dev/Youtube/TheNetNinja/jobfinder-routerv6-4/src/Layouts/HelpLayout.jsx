import { Outlet } from "react-router-dom";
import Help from "../components/Help";
import HelpNavbar from "../components/HelpNavbar";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <Help />
      <HelpNavbar />
      <Outlet />
    </div>
  );
};
export default HelpLayout;
