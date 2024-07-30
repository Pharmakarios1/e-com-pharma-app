import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <Link
      to="/auth"
      className="border-2 p-1 border-white rounded-full cursor-pointer"
    >
      <CiUser size={15} color="white" />
    </Link>
  );
};

export default User;
