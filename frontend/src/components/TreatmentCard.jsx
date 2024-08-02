import { FaAngleRight } from "react-icons/fa";

const TreatmentCard = ({ title, icon, img }) => {
  return (
    <div className="w-full sm:w-72 border-2 flex flex-col rounded-md shadow-2xl cursor-pointer hover:border-[#277c67] md:hover:bg-green-200 transition-all duration-6000 hover:animate-pulse">
      <div className=" hidden img md:block  h-36  w-full">
        <img src={img} alt="" className="w-full h-[100%]" />
      </div>
      <div className="content flex justify-between items-center bg-[#277c67] p-[15px] rounded-md md:rounded-sm hover:bg-[#277]">
        <div className="border-2 rounded-full p-1 text-white">{icon}</div>
        <div className="text-white">{title}</div>
        <div>
          <FaAngleRight size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
