import { CiSearch } from "react-icons/ci";
import FetchData from "../FetchData";
const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="flex items-center text-white font-bold text-[2.5rem] justify-center text-center sm:text-[1.8rem]">
          Nigerian Number Online Pharmacy!
        </h1>
        <p className="text-center text-white text-pretty font-medium text-[1.3rem] sm:text-[1rem]">
          Rated 'excellent' and trusted by more than 1.35 million customers
        </p>
        <div className="search md:mt-10">
          <div className="flex w-full bg-slate-100 rounded-md">
            <button className="bg-orange-600 w-20 flex items-center justify-center rounded-l">
              <CiSearch size={30} color="white" />
            </button>
            <input
              type="search"
              name="search"
              id="search"
              className="w-[90%] py-2 px-2 rounded-md  outline-none"
              placeholder="Search Pharmakart!"
            />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex md:mt-10">
        <div className="flex flex-col">
          <h1 className="text-white">Featured Products!</h1>
          <div className="flex">
            <FetchData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
