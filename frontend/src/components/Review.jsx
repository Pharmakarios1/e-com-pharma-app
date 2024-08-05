import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { icons } from "../assets/static/";
const Review = () => {
  return (
    <div className=" flex items-center mt-14 md:hidden bg-white px-10 py-3 border-b border-[1px]">
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <div className="stars flex gap-3">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
          </div>
          <Link to="/review" className="hover:underline underline-offset-2 ">
            197,043 Customer Reviews
          </Link>
        </div>
        <div>
          <img src={icons.review} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
