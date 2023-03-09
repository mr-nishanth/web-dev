import { Form } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logoMark from "../assets/logomark.svg";
import { TrashIcon } from "@heroicons/react/24/solid";
const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to={"/"} aria-label="Go to Home">
        <img src={logoMark} alt="Logo Mark" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          // If the user click cancel it's won't go to logout
          onSubmit={(event) => {
            if (!confirm("Delete User and all data ?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
