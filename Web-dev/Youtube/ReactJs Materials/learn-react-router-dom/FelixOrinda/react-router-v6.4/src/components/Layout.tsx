import { Link } from "react-router-dom";

type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
      {children}
    </div>
  );
};
export default Layout;
