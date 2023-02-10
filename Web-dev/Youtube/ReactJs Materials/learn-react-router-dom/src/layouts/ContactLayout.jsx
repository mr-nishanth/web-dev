import { Outlet } from "react-router-dom";
import Contact from "../screens/Contact";

const ContactLayout = () => {
  return (
    <>
      <Contact />
      <Outlet />
    </>
  );
};
export default ContactLayout;
