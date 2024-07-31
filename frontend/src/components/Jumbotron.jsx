import Carousel from "./Carousel";
import Hero from "./Hero";

const Jumbotron = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#31bda1] px-5 md:px-20 py-10 flex flex-col lg:flex-row lg:gap-24">
        <Hero />
        <Carousel />
      </div>
    </>
  );
};

export default Jumbotron;
