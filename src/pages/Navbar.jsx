import { useSelector } from "react-redux";

const Navbar = () => {
  const userEmail = useSelector((state) => state.user.email);
  return (
    <nav className="navbar">
      <h1>PetStore.com</h1>
      <div className="leftlinks">
          <a href ="/">Home</a>
          <a href ="/Pets">Pets</a>
          <a href ="/merchandise">Merchandise</a>
          <a href ="/suppliers">Suppliers</a>
          <a href ="/customers">Customers</a>
          <a href = "/Adopt">Adopt</a>
      </div>
      <div className='rightlinks'>
          <a href ="/cart">Cart</a>
          <a href ="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
