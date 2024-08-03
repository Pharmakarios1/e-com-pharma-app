import { motion } from "framer-motion";

const CaroselCard = ({ img, activeIndex }) => {
  return (
    <div className="flex flex-col w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 justify-center items-center lg:justify-start md:h-[100%] w-full  rounded-md p-2 md:p-6 shadow-2xl lg:mt-12"
      >
        <div className="mx-auto w-full">
          <img
            src={img[activeIndex]}
            alt="carousel"
            className="rounded-md w-full h-56 lg:h-80 lg:shadow-2xl "
          />
          {/* <div className="flex flex-col">
            <h2 className=" hidden xl:block text-center text-xl font-bold">
              Featured Product
            </h2>
            <h2 className=" hidden xl:block text-xl font-bold text-center">
              {about}
            </h2>
            <p className="hidden xl:block md:text-center text-white text-[13px] ">
              {content}
            </p>
            <img
              src={item}
              className=" rounded-full md:mt-[2.8rem] w-1/3 mx-auto hidden xl:block animate-pulse"
            />
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default CaroselCard;
