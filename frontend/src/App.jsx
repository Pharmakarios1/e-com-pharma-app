import FetchData from "./FetchData";

import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <h1 className="text-red-500 font-extrabold">Pharmakart </h1>
      <FetchData />
    </>
  );
}

export default App;
