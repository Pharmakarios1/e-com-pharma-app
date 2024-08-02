import { motion } from "framer-motion";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const CaroselCard = ({ item, about, content }) => {
  return (
    <div className="flex flex-col relative ">
      <div className="flex justify-between absolute top-0 inset-0 ">
        <button>
          <FaArrowCircleLeft
            size={25}
            color="white"
            className="bg-[#31bda1] rounded-full"
          />
        </button>
        <button>
          <FaArrowCircleRight size={25} color="white" />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 justify-start md:h-[100%] w-full  border-2 border-[#31bda1] rounded-md p-2 pr-6 md:p-6 shadow-2xl"
      >
        <img src={item} alt="carousel" className="rounded-md" />
        <div className="flex flex-col">
          <h2 className="text-center text-xl font-extrabold">
            Featured Product
          </h2>
          <h2 className="text-xl font-bold text-center">{about}</h2>
          <p className=" md:text-center text-white text-[13px] ">{content}</p>
          <img
            src={item}
            className="rounded-full md:mt-[2.8rem] w-1/3 mx-auto hidden md:block animate-pulse"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CaroselCard;
