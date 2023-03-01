import { Container, Navbar, NavLink, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" className="mb-4" style={{ height: "3.7rem" }}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white">
            Chat App
          </Navbar.Brand>
          <span className="text-warning">Logged in as Nishanth</span>
          <Stack direction="horizontal" gap={4}>
            <NavLink>
              <Link to="/register" className="text-white  text-decoration-none">
                Register
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/login" className="text-white  text-decoration-none">
                Login
              </Link>
            </NavLink>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;