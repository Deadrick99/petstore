import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";

const Layout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
    </>
  );
};

export default Layout;
