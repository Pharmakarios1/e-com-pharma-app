import Hamburger from "hamburger-react";
import { useState } from "react";

const Bars = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Hamburger
        size={30}
        color="#4FD1C5"
        rounded
        toggled={open}
        toggle={setOpen}
      />
    </div>
  );
};

export default Bars;
