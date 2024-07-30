import { MdOutlineLocalPharmacy } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineDiamond } from "react-icons/md";
import {
  CiDeliveryTruck,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import Bars from "./Hamburger";
import { Link } from "react-router-dom";
import User from "./Auth/User";
import Search from "./Search";

const Nav = () => {
  return (
    <div className="flex flex-col sm:justify-evenly sm:px-20 ">
      <div className="bg-green-200  flex justify-between sm:bg-white">
        <div className="mobile-bar flex items-center sm:hidden">
          <Bars />
          <Search />
        </div>
        <Link to="/" className="flex items-center gap-1">
          <MdOutlineLocalPharmacy size={60} color="#277c6f" />
          <div className="flex flex-col">
            <h2 className="font-bold sm:text-xl text-[#277c6f]">Pharmakart</h2>
            <p className="text-[12px]"> Adding Life to Years</p>
          </div>
        </Link>
        <div className="hidden md:flex flex-col">
          <div className="flex bg-[#277c6f] rounded-b-xl">
            <ul className="flex px-2 py-1 mx-auto gap-3 text-white font-medium text-sm ">
              <li className="hover:border-b-1">
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>Call Back</li>
              <li>0207 112 9014</li>
            </ul>
          </div>
          <div className="flex py-3">
            <ul className="flex px-2 py-1 mx-auto gap-2 font-medium text-sm ">
              <li className="hover:border-b-1 flex gap-1 items-center">
                <FaStar color="orange" />
                <Link to="/">196,555 Reviews</Link>
              </li>
              <li className="hover:border-b-1 flex gap-1 items-center">
                <MdOutlineDiamond size={15} />
                <Link to="/">Loyalty</Link>
              </li>
              <li className="hover:border-b-1 flex gap-1 items-center">
                <CiDeliveryTruck size={18} />
                <Link to="/">Delivery</Link>
              </li>
              <li className="hover:border-b-1 flex gap-1 items-center">
                <IoShirtOutline />
                <Link to="/">Merch</Link>
              </li>
              <li className="hover:border-b-1 flex gap-1 items-center">
                <GoBook />
                <Link to="/">Hub</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-bar flex items-center gap-2 pr-2  sm:hidden">
          <User />
          <CiShoppingCart size={28} color="#277c6f" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
