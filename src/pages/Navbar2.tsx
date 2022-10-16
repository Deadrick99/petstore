import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './images/petstorelogo1.png'
import {LinkContainer} from 'react-router-bootstrap'
function Navbar2() {
  return (
    <Navbar sticky="top" expand="lg" bg="white">
      <Container>
        <img width="70px" height="auto" className="img-responsive" src={Logo} alt="logo" />
        <LinkContainer to = {"/"}>
        <Navbar.Brand>PetStore.com</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pets" id="basic-nav-dropdown">
              <LinkContainer to = {'/PetsDog'}>
              <NavDropdown.Item >Dogs</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/PetsCat'}>
              <NavDropdown.Item >Cats</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/PetsOther'}>
              <NavDropdown.Item >Other</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Merchandise" id="basic-nav-dropdown">
               <LinkContainer to = {'/MerchDog'}>
              <NavDropdown.Item >Dog Merch</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/MerchCat'}>
              <NavDropdown.Item >Cat Merch</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/MerchOther'}>
              <NavDropdown.Item >Other Merch</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
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
