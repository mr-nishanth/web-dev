import { NavLink } from "react-router-dom";

const HelpNavbar = () => {
  return (
    <nav>
      <NavLink to={"faq"}>View the FAQ</NavLink>
      <NavLink to={"contact"}>Contact Us</NavLink>
    </nav>
  );
};
export default HelpNavbar;
