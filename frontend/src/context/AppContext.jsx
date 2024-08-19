import { createContext, useContext, useRef, useState } from "react";
import Product from "../Pages/Product";

// 1. create a context
export const AppContext = createContext();

// 2. create a provider component

export const AppProvider = ({ children }) => {
  const inputRef = useRef(null);
  const [product, setProduct] = useState(["mango", "oranges", "yam"]);
  const [searchItem, setSearchItem] = useState("");

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const filteredData = product.filter((item) => {
    item.toLowerCase().includes(searchItem.toLowerCase());
  });
  console.log(filteredData);

  return (
    <AppContext.Provider
      value={{ inputRef, focusInput, searchItem, setSearchItem, filteredData }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3. create a consumer of the provider

export const useFocus = () => {
  return useContext(AppContext);
};

// 4. custom hook
export const useSearch = () => {
  return useContext(AppContext);
};
