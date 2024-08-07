import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ ref }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex w-full lg:w-[22rem] bg-slate-100 rounded-md">
        <button className="bg-orange-600 w-20 flex items-center justify-center rounded-l">
          <CiSearch size={30} color="white" />
        </button>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search"
          ref={ref}
          id="search"
          className="w-[90%] py-3 px-2 rounded-md  outline-none"
          placeholder="Search Pharmakart..."
        />
      </div>
    </div>
  );
};

export default Search;
