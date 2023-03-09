import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>JobFinder</h1>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"help"}>Help</NavLink>
      </nav>
    </header>
  );
};
export default Navbar;
