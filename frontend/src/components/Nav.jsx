import { MdOutlineLocalPharmacy } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineDiamond } from "react-icons/md";
import { CiDeliveryTruck, CiHome, CiShoppingCart } from "react-icons/ci";
import { FaAngleDown, FaStar } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import Bars from "./Hamburger";
import { Link, NavLink } from "react-router-dom";
import User from "./Auth/User";
import Search from "./Search";
import { useRef, useState } from "react";
import SideBar from "./SideBar";
import { motion, AnimatePresence, transform, spring } from "framer-motion";

const Nav = () => {
  const [modal, setModal] = useState(false);
  const ref = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };
  const handleAuthModal = () => {
    setModal((prev) => !prev);
  };
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 3,
        x: {
          duration: 1,
        },
      },
    },
  };

  return (
    <div className="flex flex-col sm:justify-evenly md:px-20 ">
      <div className="bg-[#277c6f]  flex justify-between md:bg-white shadow-2xl md:shadow-none fixed w-full sm:sticky top-0 z-10 ">
        <div className="mobile-bar flex items-center lg:hidden">
          <Bars handleMobileMenu={handleMobileMenu} />
          <Search ref={ref} />
        </div>
        <Link to="/" className="flex items-center gap-1">
          <motion.div
            className="div"
            initial={{ x: "-100vw" }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ duration: 2, type: "spring", damping: 30 }}
          >
            <MdOutlineLocalPharmacy
              size={60}
              // className={`${mobileColor} ? mobile: "#277c67" `}
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h2 className="font-bold sm:text-xl text-white md:text-[#277c6f]">
              Pharmakart
            </h2>
            <p className="text-[10px] md:text-[12px] text-white md:text-[#277c6f]">
              Adding Life to Years
            </p>
          </motion.div>
        </Link>
        <div className="hidden md:flex flex-col">
          <div className="flex bg-[#277c6f] rounded-b-xl pb-2">
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
              <li className="hover:underline underline-offset-2 transition-all delay-200 flex gap-1 items-center">
                <FaStar color="orange" />
                <Link to="/">196,555 Reviews</Link>
              </li>
              <li className="hover:underline underline-offset-2 transition-all delay-200 flex gap-1 items-center">
                <MdOutlineDiamond size={15} />
                <Link to="/">Loyalty</Link>
              </li>
              <li className="hover:underline underline-offset-2 transition-all delay-200 flex gap-1 items-center">
                <CiDeliveryTruck size={18} />
                <Link to="/">Delivery</Link>
              </li>
              <li className="hover:underline underline-offset-2 transition-all delay-200 flex gap-1 items-center">
                <IoShirtOutline />
                <Link to="/">Merch</Link>
              </li>
              <li className="hover:underline underline-offset-2 transition-all delay-200 flex gap-1 items-center">
                <GoBook />
                <Link to="/product">Hub</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-bar flex items-center gap-2 pr-2  md:hidden cursor-pointer">
          <User modal={modal} setModal={handleAuthModal} />
          <div className="relative">
            <CiShoppingCart
              size={28}
              className="text-white md:text-[#277c6f]"
            />
            <span className="absolute w-4 h-4 -top-2 text-[12px] -right-2 bg-white rounded-full grid place-content-center text-red-600">
              0
            </span>
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div className="mobile absolute top-16 lg:hidden bg-white min-h-screen w-60 z-20 rounded-r-md shadow">
          <div className="flex p-3 flex-col gap-4 border-b border-[#277]">
            <NavLink
              to="/"
              className="flex justify-between border-b text-[#277] p-1"
            >
              <CiHome size={20} />
              <p>Home</p>
            </NavLink>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Men's Health</p>
              <FaAngleDown />
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Women's Health</p>
              <FaAngleDown />
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Global Health</p>
              <FaAngleDown />
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Respiratory & Digestive</p>
              <FaAngleDown />
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Travel</p>
              <FaAngleDown />
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Skin Care</p>
              <FaAngleDown />
            </Link>
          </div>
          <div className="flex p-3 flex-col gap-4 ">
            <Link className="flex justify-between items-center text-[#277]">
              <p>Official Merchandise</p>
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Health Hub</p>
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>How it works</p>
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>About Us</p>
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Reviews</p>
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Loyalty Program</p>
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Fequently Asked Questions</p>
            </Link>
            <Link className="flex justify-between items-center text-[#277]">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
