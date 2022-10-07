import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>PetStore.com</h1>
      <div className="leftlinks">
          <a href ="/">Home</a>
          <a href ="/pets">Pets</a>
          <a href ="/merchandise">Merchandise</a>
          <a href ="/suppliers">Suppliers</a>
          <a href ="/customers">Customers</a>
      </div>
      <div className='rightlinks'>
          <a href ="/cart">Cart</a>
          <a href ="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
