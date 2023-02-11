import { Link, NavLink, useLocation } from "react-router-dom";

type Props = {
  children: JSX.Element;
};
const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Users", path: "/dashboard/users" },
  { name: "Settings", path: "/dashboard/settings" },
];
const DashBoardLayout = ({ children }: Props) => {
  const location = useLocation().pathname;
  return (
    <div className="max-w-full mx-auto">
      {/* Header */}
      <header className="flex justify-between border-b px-10 py-4">
        <Link to={"/"}>Blackly</Link>
        <div className="flex gap-4">
          <button>Logout</button>
          <button>Profile</button>
        </div>
      </header>
      <main className="flex">
        {/* Sidebar */}
        <aside className="p-4 border-r">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.name}
                className={({ isActive }) =>
                  isActive && location == link.path
                    ? "text-blue-600 underline"
                    : "text-gray-600 hover:text-blue-600 hover:underline"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </aside>
        {/* Content */}
        <div>{children}</div>
      </main>
    </div>
  );
};
export default DashBoardLayout;
