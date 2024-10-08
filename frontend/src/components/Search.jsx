import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useFocus } from "../context/AppContext";
import { useSearch } from "../context/AppContext";

const Search = () => {
  // const [search, setSearch] = useState("");
  const { searchItem, setSearchItem } = useSearch();
  const { inputRef } = useFocus();

  return (
    <div>
      <div className="flex w-full lg:w-[22rem] bg-slate-100 rounded-md">
        <button className="bg-orange-600 w-20 flex items-center justify-center rounded-l">
          <CiSearch size={30} color="white" />
        </button>
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          type="search"
          name="search"
          ref={inputRef}
          id="search"
          className="w-[90%] py-3 px-2 rounded-md  outline-none"
          placeholder="Search Pharmakart..."
        />
      </div>
    </div>
  );
};

export default Search;
