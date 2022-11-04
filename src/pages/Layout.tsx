import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
