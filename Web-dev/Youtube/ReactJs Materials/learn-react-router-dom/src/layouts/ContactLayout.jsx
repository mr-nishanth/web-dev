import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";

const ContactLayout = () => {
  return (
    <>
      <Contact />
      <Outlet />
    </>
  );
};
export default ContactLayout;
