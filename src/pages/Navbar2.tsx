import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './images/petstorelogo1.png'
import {LinkContainer} from 'react-router-bootstrap'
import { useAppDispatch, useAppSelector} from "../redux/hooks"
import { setBounced } from "../redux/bounced";
import  { setViews } from "../redux/views";
import { setPageEnd, setPageTotal } from "../redux/pageTime";
import { Button } from "react-bootstrap";
import {FaPaw} from "react-icons/fa";
import { useShoppingCart } from "./ShoppingCartContext";
function Navbar2() {
   const bounced = useAppSelector((state) => state.bounced.bounced);
   const pageTime = useAppSelector((state) => state.pageTime.totalPageTime);
   const views = useAppSelector((state) =>state.views.views);
   const dispatch = useAppDispatch();
   const {openCart, cartQuantity} = useShoppingCart()
  function click()
  { 
    var d= new Date();
    dispatch(setPageEnd(d.getTime()));
    dispatch (setPageTotal());
    console.log({pageTime})
    if (bounced === true){
      dispatch(setBounced());
      console.log("User did not bounce");
    }
    dispatch(setViews());
    console.log(`pageviews ${views}`)
    
  }
  return(
    
    <Navbar expand="lg" className="sticky-top bg-light" >
      <Container>
        <img width="70px" height="auto" className="img-responsive" src={Logo} alt="logo" />
        <LinkContainer to = {"/"}>
        <Navbar.Brand onClick= {() =>click()}> PetStore.com</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pets" id="basic-nav-dropdown">
              <LinkContainer to = {'/PetsDog'}>
              <NavDropdown.Item onClick= {() =>click()}>Dogs</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/PetsCat'}>
              <NavDropdown.Item onClick= {() =>click()} >Cats</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/PetsOther'}>
              <NavDropdown.Item onClick= {() =>click()} >Other</NavDropdown.Item>
              </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Merchandise" id="basic-nav-dropdown">
               <LinkContainer to = {'/MerchDog'}>
              <NavDropdown.Item onClick= {() =>click()} >Dog Merch</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/MerchCat'}>
              <NavDropdown.Item onClick= {() =>click()} >Cat Merch</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = {'/MerchOther'}>
              <NavDropdown.Item onClick= {() =>click()}>Other Merch</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            {/* <Nav.Link href="/Suppliers">Suppliers</Nav.Link>
            <Nav.Link href="/Customers">Customers</Nav.Link> */}
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link href="/Login" onClick= {() =>click()}>Login</Nav.Link>
            <Nav.Link href="/Signup" onClick= {() =>click()}>Sign Up</Nav.Link>
            <Button  className= "rounded-circle" onClick={openCart}><FaPaw></FaPaw><div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style ={{color:'white', width :"1.25rem", height:"1.25rem",position: "absolute", bottom:18, transform:"translate(60%,0%)"}}>{cartQuantity}</div></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar2;
