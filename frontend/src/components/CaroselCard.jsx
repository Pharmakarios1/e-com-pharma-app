import { motion } from "framer-motion";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const CaroselCard = ({ item, about, content, handleNext, handlePrev }) => {
  return (
    <div className="flex flex-col relative w-full">
      <div className="flex justify-between absolute top-0 inset-0 ">
        <button>
          <FaArrowCircleLeft
            size={25}
            color="white"
            className="bg-[#31bda1] rounded-full"
            onClick={handlePrev}
          />
        </button>
        <button>
          <FaArrowCircleRight
            size={25}
            color="white"
            className="bg-[#31bda1] rounded-full"
            onClick={handleNext}
          />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 justify-center items-center lg:justify-start md:h-[100%] w-full  rounded-md p-2 md:p-6 shadow-2xl"
      >
        <div className="mx-auto w-full">
          <img src={item} alt="carousel" className="rounded-md w-full h-60 " />
          <div className="flex flex-col">
            <h2 className=" hidden xl:block text-center text-xl font-bold">
              Featured Product
            </h2>
            <h2 className=" hidden xl:block text-xl font-bold text-center">
              {about}
            </h2>
            <p className="hidden xl:block md:text-center text-white text-[13px] ">
              {content}
            </p>
            {/* <img
              src={item}
              className=" rounded-full md:mt-[2.8rem] w-1/3 mx-auto hidden xl:block animate-pulse"
            /> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaroselCard;
