import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import Review from "../components/Review";

const Layout = () => {
  return (
    <>
      <Nav />
      <SideBar />
      <Review />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
