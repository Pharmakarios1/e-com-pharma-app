import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <Link
        to="/auth"
        className="border-2 p-1 border-white rounded-full cursor-pointer hover:animate-bounce"
      >
        <CiUser size={15} color="white" />
      </Link>
      <span className="border-2 w-1 h-1 rounded-full animate-ping border-red-600"></span>
    </>
  );
};

export default User;
