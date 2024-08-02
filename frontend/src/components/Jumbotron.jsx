import Carousel from "./Carousel";
import Hero from "./Hero";

const Jumbotron = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-[#31bda1] px-5 md:px-20 pt-20 md:py-10 flex flex-col lg:flex-row lg:gap-24">
        <Hero />
        <Carousel />
      </div>
    </>
  );
};

export default Jumbotron;
