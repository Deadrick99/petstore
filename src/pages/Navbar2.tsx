import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./images/petParadiseLogo1.png";
import Moon from "./images/moon.png";
import Sun from "./images/sun.png";
import { LinkContainer } from "react-router-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setBounced } from "../redux/bounced";
import { setViews } from "../redux/views";
import { setPageEnd, setPageStart, setPageTotal } from "../redux/pageTime";
import { Button } from "react-bootstrap";
import { FaPaw } from "react-icons/fa";
import { useShoppingCart } from "./ShoppingCartContext";
import { setLoggedIn } from "../redux/user";
import Axios from "axios";
import { setSendTotal } from "../redux/time";
function Navbar2() {
  const bounced = useAppSelector((state) => state.bounced.bounced);
  const pageTime = useAppSelector((state) => state.pageTime.totalPageTime);
  const views = useAppSelector((state) => state.views.views);
  const loggedIn = useAppSelector((state) => state.user.loggedIn);
  const isAdmin = useAppSelector((state) => state.user.admin);
  const email = useAppSelector((state) => state.user.email);
  const userName = email.substring(0,email.indexOf('@') );
  const dispatch = useAppDispatch();
  const { openCart, cartQuantity } = useShoppingCart();
  var greeting;
  
  async function click() {
    var d = new Date();
    dispatch(setPageEnd(d.getTime()));
    dispatch(setPageTotal());
    console.log(parseInt(pageTime.toString()));
    await Axios.post("https://monitoringapiteam4.azurewebsites.net/api/Metrics/AddPageTime/"+parseInt(pageTime.toString())+"/null");
    if (bounced === true) {
      dispatch(setBounced());

       await Axios.post("https://monitoringapiteam4.azurewebsites.net/api/Metrics/AddBounceRate");
      console.log("User did not bounce");
    }
    dispatch(setViews());
    dispatch(setPageStart(d.getTime()))
    console.log(`pageviews ${views}`);
  }
  if(loggedIn == "true"){
    console.log(isAdmin);
    if(isAdmin.toString() == "true")
    {
      console.log(isAdmin);
      greeting= <NavDropdown title={userName} id="basic-nav-dropdown">
                <LinkContainer to={"/login"} >
                <NavDropdown.Item onClick={() => dispatch(setLoggedIn("false"))}>Logout</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/login"} >
                <NavDropdown.Item onClick={() => dispatch(setLoggedIn("false"))}>Admin Controlls</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/login"} >
                <NavDropdown.Item onClick={() => dispatch(setLoggedIn("false"))}>Pending Applications</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> 
             
    }
    else 
    {
      console.log(isAdmin);
      greeting=<NavDropdown title={userName} id="basic-nav-dropdown">
                <LinkContainer to={"/login"} >
                <NavDropdown.Item onClick={() => dispatch(setLoggedIn("false"))}>Logout</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/login"} >
                <NavDropdown.Item onClick={() => dispatch(setLoggedIn("false"))}>Applications</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> 
    }
  }
  else{
    greeting =<Nav style={{marginTop: ".3rem"}}><LinkContainer to={"/login"} >
            <Nav.Item onClick={() => click()}>
              Login
            </Nav.Item>
            </LinkContainer>
            <Nav.Item>|</Nav.Item>
            <LinkContainer to={"/SignUp"}>
            <Nav.Item onClick={() => click()}>
              Sign Up
            </Nav.Item>
            </LinkContainer></Nav>
  }
  return (
    <Navbar expand="lg" className="sticky-top bg-light">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand onClick={() => click()}>
            <img width="70px" height="auto" className="img-responsive" src={Logo} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to={"/"}>
          <Navbar.Brand onClick={() => click()}> Pet Paradise </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pets" id="basic-nav-dropdown">
              <LinkContainer to={"/PetsDog"}>
                <NavDropdown.Item onClick={() => click()}>Dogs</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/PetsCat"}>
                <NavDropdown.Item onClick={() => click()}>Cats</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/PetsOther"}>
                <NavDropdown.Item onClick={() => click()}>Other</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Merchandise" id="basic-nav-dropdown">
              <LinkContainer to={"/MerchDog"}>
                <NavDropdown.Item onClick={() => click()}>Dog Merch</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/MerchCat"}>
                <NavDropdown.Item onClick={() => click()}>Cat Merch</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/MerchOther"}>
                <NavDropdown.Item onClick={() => click()}>Other Merch</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            {/* <Nav.Link href="/Suppliers">Suppliers</Nav.Link>
            <Nav.Link href="/Customers">Customers</Nav.Link> */}
          </Nav>
            
          <Nav className="ml-auto">
            {greeting}
            <Button className="rounded-circle" onClick={openCart}>
              <FaPaw></FaPaw>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.25rem",
                  height: "1.25rem",
                  position: "absolute",
                  bottom: 18,
                  transform: "translate(60%,0%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar2;
