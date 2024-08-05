import { FaAngleRight } from "react-icons/fa";

const Card = ({ title, img, detail, amount }) => {
  return (
    <div>
      <div className="relative flex flex-col border-[1px] border-slate-300 rounded-md w-60 h-[17rem] hover:animate-pulse">
        <h2 className="text-center text-[#277c6f] font-bold p-1">{title}</h2>
        <img src={img} alt="" className="w-full h-32" />
        <p className="text-sm p-1 ">{detail}</p>
        <div className="flex px-2 bg-[#277c6f] text-white rounded-b-md absolute bottom-0 w-full h-8 items-center justify-between">
          <p> From {amount}</p>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
