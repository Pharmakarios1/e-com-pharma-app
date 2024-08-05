import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { motion } from "framer-motion";
import { useEffect } from "react";

const User = ({ modal, setModal }) => {
  return (
    <>
      <div
        className="border-2 p-1 border-white rounded-full cursor-pointer  relative"
        onClick={setModal}
      >
        <CiUser size={15} color="white" />
      </div>
      <span className="border-2 w-1 h-1 rounded-full animate-ping border-red-600"></span>
      {modal && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col absolute top-12 right-3 h-40 w-28 text-sm bg-white shadow-lg rounded-md p-2 z-30"
        >
          <Link
            to="/profile"
            className="text-[#277c67] hover:underline underline-offset-2"
            onClick={setModal}
          >
            My Account
          </Link>
          <Link
            to="/profile"
            className="text-[#277c67] hover:underline underline-offset-2"
            onClick={setModal}
          >
            My Orders
          </Link>
          <Link
            to="/profile"
            className="text-[#277c67] hover:underline underline-offset-2"
            onClick={setModal}
          >
            My Points
          </Link>

          <div className="flex flex-col gap-2  rounded-md mt-2">
            <button
              className="p-1 bg-[#288c67] rounded-md text-white"
              onClick={setModal}
            >
              <Link to="/auth">Log In</Link>
            </button>
            <button
              className="p-1 text-[#288c67] rounded-md bg-white border-2 border-[#277c67]"
              onClick={setModal}
            >
              <Link to="/auth">Register</Link>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default User;
