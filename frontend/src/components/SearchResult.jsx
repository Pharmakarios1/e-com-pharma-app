import { useSearch } from "../context/AppContext";

const SearchResult = () => {
  const { filteredData } = useSearch();
  return (
    <ul>
      {filteredData.length > 0
        ? filteredData.map((item) => <li key={item.id}>{item.title}</li>)
        : "No results found"}
    </ul>
  );
};

export default SearchResult;
