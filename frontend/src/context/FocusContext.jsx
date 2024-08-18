import { createContext, useContext, useRef } from "react";

const FocusContext = createContext(null);
export const useFocus = () => {
  return useContext(FocusContext);
};
const FocusProvider = ({ children }) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <FocusContext.Provider value={{ inputRef, focusInput }}>
      {children}
    </FocusContext.Provider>
  );
};

export default FocusProvider;
