import { CiBookmarkCheck, CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import Search from "./Search";
import SearchResult from "./SearchResult";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          // whileHover={{ color: "#EA580C" }}
          className="flex items-center text-white font-bold text-[2rem] justify-center text-center sm:text-[2.1rem]"
        >
          Nigerian Leading Online Pharmacy!
        </motion.h1>
        <p className="text-center text-white text-pretty font-medium text-[1rem] ">
          Rated 'excellent' and trusted by more than 1.35 million customers
        </p>
        <div className="search md:mt-5">
          <Search />
        </div>
      </div>
      <div className=" hidden md:flex md:flex-row flex-col md:mt-10 shadow">
        <div className="flex flex-wrap  w-[27rem] h-24 p-3 ">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="flex  flex-wrap gap-4"
          >
            <li className="flex gap-1 place-items-center text-white">
              <CiBookmarkCheck size={25} color="black" />
              9ja registered Pharmacy
            </li>
            <li className="flex gap-1 place-items-center text-white">
              <IoBagAdd color="green" size={20} />
              Descrete Packaging
            </li>
            <li className="flex gap-1 place-items-center text-white">
              <CiBookmarkCheck color="black" />
              Fast next day delivery
            </li>
            <li className="flex gap-1 place-items-center text-white">
              <FaStar size={25} color="orange" />
              197,055 customer reviews
            </li>
          </motion.ul>
        </div>
        <SearchResult />
      </div>
    </div>
  );
};

export default Hero;
