import { useState } from "react";
import {
  FaAngleDown,
  FaAngleRight,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMobile,
  FaPhone,
  FaPinterestSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleMoble = () => {
    if (window.innerHeight < 900) {
      setIsMobile(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#277c67]">
      <div className="flex bg-[#0A2034] text-white flex-col p-5 h-56 lg:h-24 lg:px-20 gap-2 md:flex-row md:justify-between items-center">
        <div className="flex socials gap-2 justify-center">
          <FaFacebookSquare size={28} />
          <FaInstagramSquare size={28} />
          <FaYoutubeSquare size={28} />
          <FaSquareXTwitter size={28} />
          <FaPinterestSquare size={28} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-center text-2xl mt-5 font-semibold">
            WANT 10% OFF?
          </h2>
          <p className="text-center mb-3">
            Join our newsletter and receive an exclusive 10% off.
          </p>
        </div>
        <div className="cta flex rounded-md  w-full sm:w-[18rem] ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter you email..."
            className="w-full sm:w-[15rem] rounded-l-md p-3 outline-none text-black"
          />
          <button className="bg-orange-500 w-16 flex items-center justify-center rounded-r-md">
            <FaAngleRight size={25} />
          </button>
        </div>
      </div>

      <div className="footer-links flex flex-col lg:flex-row  px-5 lg:pt-24 text-white justify-between pb-10 lg:pb-0 lg:mx-14 ">
        <div className="logo flex items-center justify-center mt-5 lg:mt-0">
          <MdOutlineLocalPharmacy size={70} color="white" />
        </div>
        <div className="popular-treatments flex">
          <div className="flex flex-col w-full">
            <div
              className="flex justify-between items-center w-full cursor-pointer border-b-2 border-green-50 lg:border-none"
              onClick={handleOpen}
            >
              <h3 className="font-bold text-lg">Popular Treatments</h3>
              <FaAngleDown size={25} className="lg:hidden" />
            </div>
            {open && (
              <ul className="mt-3">
                <li className="hover:underline">
                  <Link to="/">Eretile Dysfunction</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Weight Loss</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Hair Loss</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Migraine</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Sexual Health</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Asthma</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="Learn-more flex mt-5 lg:mt-0">
          <div className="flex flex-col w-full">
            <div
              className="flex justify-between items-center w-full cursor-pointer border-b-2 border-green-50 lg:border-none"
              onClick={handleOpen}
            >
              <h3 className="font-bold text-lg">Learn More</h3>
              <FaAngleDown size={25} className="lg:hidden" />
            </div>
            {open && (
              <ul className="mt-3">
                <li className="hover:underline">
                  <Link to="/">How It works</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">About Us</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">FAQs</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Health Hub</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Work for Us</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="Useful-links flex mt-5 lg:mt-0">
          <div className="flex flex-col w-full">
            <div
              className="flex justify-between items-center w-full cursor-pointer border-b-2 border-green-50 lg:border-none"
              onClick={handleOpen}
            >
              <h3 className="font-bold text-lg">Useful Links</h3>
              <FaAngleDown size={25} className="lg:hidden" />
            </div>
            {open && (
              <ul className="mt-3">
                <li className="hover:underline">
                  <Link to="/">Delivery Info</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Contact Us</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Reviews</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Loyalty Program</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Promotions</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/">Refer A Friend</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="get-in-touch flex mt-5 lg:mt-0">
          <div className="flex flex-col w-full">
            <div
              className="flex justify-between items-center w-full cursor-pointer border-b-2 border-green-50 lg:border-none"
              onClick={handleOpen}
            >
              <h3 className="font-bold text-lg">Get In Touch</h3>
              <FaAngleDown size={25} className="lg:hidden" />
            </div>
            {open && (
              <ul className="flex flex-col gap-2 mt-5">
                <li className="flex gap-4">
                  <span className="w-10 h-10 bg-[#275] flex items-center justify-center rounded-lg">
                    <FaPhone />
                  </span>
                  <span>
                    <p className="font-bold">Phone</p>
                    <p className="text-[11px]">02949557575</p>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="w-10 h-10 bg-[#275] flex items-center justify-center rounded-lg">
                    <FaMobile />
                  </span>
                  <span>
                    <p className="font-bold">Text</p>
                    <p className="text-[11px]">0744955755</p>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="w-10 h-10 bg-[#275] flex items-center justify-center rounded-lg">
                    <FaEnvelope />
                  </span>
                  <span>
                    <p className="font-bold">Email</p>
                    <p className="text-[11px]">help@pharmakart.info</p>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="w-10 h-10 bg-[#275] flex items-center justify-center rounded-lg">
                    <HiPhoneArrowDownLeft />
                  </span>
                  <span>
                    <p className="font-bold">Request a Call Back</p>
                    <p className="text-[11px]">
                      We'll call when it suits you best
                    </p>
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
