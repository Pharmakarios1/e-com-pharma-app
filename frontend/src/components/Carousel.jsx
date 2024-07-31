import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { carouselArray } from "../assets/static";
import CaroselCard from "./CaroselCard";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(null);

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex - 1);
  };
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -activeIndex * 100 }}
        transition={{ duration: 0.5 }}
        className=" mt-5 flex md:w-[55%] h-36 md:h-[100%] md:mt-0 max-w mx-auto"
      >
        {carouselArray.map((item, index) => (
          <CaroselCard
            item={item.img}
            key={index}
            about={item.about}
            content={item.content}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Carousel;
