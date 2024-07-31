import { motion } from "framer-motion";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const CaroselCard = ({ item, about, content }) => {
  return (
    <div className="flex flex-col relative -z-100">
      <div className="flex justify-between absolute top-0 inset-0 ">
        <button>
          <FaArrowCircleLeft size={25} color="#31bda1" />
        </button>
        <button>
          <FaArrowCircleRight size={25} color="white" />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 justify-start md:h-[80%] w-full  overflow-hidden border-2 border-red-500 rounded-md"
      >
        <img src={item} alt="carousel" className="rounded-md" />
        <div className="flex flex-col">
          <h2 className="text-white font-bold text-center">{about}</h2>
          <p>{content}</p>
          <img
            src={item}
            className="rounded-lg md:mt-16 w-2/3 mx-auto hidden md:block"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CaroselCard;
