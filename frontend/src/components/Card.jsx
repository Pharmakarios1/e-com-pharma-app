import { FaAngleRight } from "react-icons/fa";

const Card = ({ title, img, detail, amount }) => {
  return (
    <div>
      <div className="relative flex flex-col border-[1px] border-slate-300 rounded-md w-[17rem] h-[20rem] hover:animate-pulse">
        <h2 className="text-center text-[#277c6f] font-bold p-1">{title}</h2>
        <img src={img} alt="" className="w-full h-44" />
        <p className="text-[12px] p-1 text-[#277c6f] ">{detail}</p>
        <div className="flex px-2 bg-[#277c6f] text-white rounded-b-md absolute bottom-0 w-full h-8 items-center justify-between">
          <p> From {amount}</p>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
