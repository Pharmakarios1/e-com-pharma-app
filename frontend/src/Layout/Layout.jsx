import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <>
      <Nav />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
