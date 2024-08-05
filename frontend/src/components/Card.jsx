const Card = ({ title, img, detail, amount }) => {
  return (
    <div>
      <div className="flex flex-col border-[1px] border-slate-300 rounded-md w-64 h-64">
        <h2>{title}</h2>
        <img src={img} alt="" />
        <p>{detail}</p>
        <p> from {amount}</p>
      </div>
    </div>
  );
};

export default Card;
