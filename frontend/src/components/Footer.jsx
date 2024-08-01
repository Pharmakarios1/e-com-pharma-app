import {
  FaAngleRight,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-screen bg-[#277c67]">
      <div className="blog flex">blog</div>
      <div className="flex bg-[#0A2034] text-white flex-col p-5 h-56 sm:h-24 md:px-20 gap-2 md:flex-row md:justify-between items-center">
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
        <div className="cta flex rounded-md ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter you email..."
            className="w-full sm:w-[15rem] rounded-l-md p-3 outline-none"
          />
          <button className="bg-orange-500 w-16 flex items-center justify-center rounded-r-md">
            <FaAngleRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
