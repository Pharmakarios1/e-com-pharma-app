import { CiHome } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ul className="breadcrumbs bg-[#31bda1] px-1 md:px-20 ">
        <li>
          <Link to="/">
            <CiHome size={25} color="white" />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="text-white">
              {isLast ? <span>{value}</span> : <Link to={to}>{value}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
