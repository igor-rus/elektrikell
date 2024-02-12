import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom"
import { NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link  to="/" className="nav-link">Home</Link>
          <Link to="/lowprice/8" className="nav-link">Low price 8h</Link>
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about/me">About me</NavDropdown.Item>
            <NavDropdown.Item href="/about/gamma">About gamma</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
