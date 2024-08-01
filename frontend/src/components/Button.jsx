const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 py-1  w-32 md:w-36 border-[#227c6f] rounded-md shadow-2xl hover:bg-green-50 hover:text-black"
    >
      {children}
    </button>
  );
};

export default Button;
