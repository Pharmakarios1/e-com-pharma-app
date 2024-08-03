import Hamburger from "hamburger-react";
import { useState } from "react";

const Bars = ({ handleMobileMenu }) => {
  return (
    <div onClick={handleMobileMenu} className="">
      <Hamburger size={30} color="white" rounded />
    </div>
  );
};

export default Bars;
