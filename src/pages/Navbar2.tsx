import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './images/petstorelogo1.png'

function Navbar2() {
  return (
    <Navbar expand="lg">
      <Container>
        <img width="70px" height="auto" className="img-responsive" src={Logo} alt="logo" />
        <Navbar.Brand href="/">PetStore.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Pets" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Pets">Dogs</NavDropdown.Item>
              <NavDropdown.Item href="/Pets">Cats</NavDropdown.Item>
              <NavDropdown.Item href="/Pets">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Merchandise">Merchandise</Nav.Link>
            <Nav.Link href="/Suppliers">Suppliers</Nav.Link>
            <Nav.Link href="/Customers">Customers</Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar2;
