import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { carouselArray } from "../assets/static";
import CaroselCard from "./CaroselCard";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselArray.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselArray.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);
  return (
    <div className="relative w-full mt-5 flex lg:w-[55%] h-44 md:h-[100%] md:mt-32 mx-auto flex-wrap">
      <div className="flex justify-between absolute inset-0">
        <button>
          <FaArrowCircleLeft
            size={25}
            color="white"
            className="bg-[#31bda1] rounded-full"
            onClick={handlePrev}
          />
        </button>
        <CaroselCard img={carouselArray} activeIndex={activeIndex} />
        <button>
          <FaArrowCircleRight
            size={25}
            color="white"
            className="bg-[#31bda1] rounded-full"
            onClick={handleNext}
          />
        </button>
      </div>
      {/* <motion.div
        initial={{ x: 0 }}
        animate={{ x: -activeIndex * 100 }}
        transition={{ duration: 0.5 }}
        className="w-full  h-44 md:h-[100%] "
      >
        {carouselArray.map((item, index) => (
          <CaroselCard
            item={item.img}
            key={index}
            about={item.about}
            content={item.content}
          />
        ))}
      </motion.div> */}
    </div>
  );
};

export default Carousel;
