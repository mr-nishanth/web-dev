import { Link, NavLink } from "react-router-dom";

type Props = {
  children: JSX.Element;
};
const links = [
  { id: "Home", path: "/", label: "Home" },
  { id: "About", path: "/about", label: "About" },
  { id: "Contact", path: "/contact", label: "Contact" },
  {
    id: "Dashboard",
    path: "/dashboard",
    label: "Dashboard",
  },
];
const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="flex justify-center gap-4 border-b py-4 shadow">
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      {children}
    </div>
  );
};
export default Layout;
