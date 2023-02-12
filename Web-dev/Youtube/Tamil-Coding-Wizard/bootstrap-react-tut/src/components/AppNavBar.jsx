import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function AppNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-primary">
            <span>
              <i className="bi bi-yelp"></i>Blackly Store
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="fw-bold text-black" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold text-black" href="#menu">
              Menu
            </Nav.Link>
            <Nav.Link className="fw-bold text-black" href="#mustTry">
              Must Try
            </Nav.Link>
            <Nav.Link className="fw-bold text-black" href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
