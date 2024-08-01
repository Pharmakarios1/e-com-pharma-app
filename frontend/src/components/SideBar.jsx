import { CiCircleChevDown, CiHome, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import Search from "./Search";

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col bg-[#277c6f] h-12 justify-center shadow-xl text-white sticky top-0 z-10">
        <div className="flex p-2 justify-between sm:px-20">
          <div className="link flex justify-between gap-2 lg:gap-3 ">
            <Link to="/">
              <CiHome size={30} />
            </Link>
            <Link to="/">
              <Search />
            </Link>
            <Link to="/" className="flex items-center gap-1">
              Men's Health <CiCircleChevDown />
            </Link>

            <Link to="/" className="flex items-center gap-1">
              Women's Health <CiCircleChevDown />
            </Link>

            <Link to="/" className="flex items-center gap-1">
              General Health <CiCircleChevDown />
            </Link>

            <Link to="/" className="flex items-center gap-1">
              Respiratory & Digestive <CiCircleChevDown />
            </Link>
            <Link to="/" className="flex items-center gap-1">
              Travel <CiCircleChevDown />
            </Link>
            <Link to="/" className="flex items-center gap-1">
              SKin Care <CiCircleChevDown />
            </Link>
          </div>
          <div className="account flex gap-2">
            <Link to="/auth" className="flex items-center gap-1">
              <CiUser
                size={25}
                className="border-2 border-white rounded-full "
              />
              <p>Account</p>
              <CiCircleChevDown />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
