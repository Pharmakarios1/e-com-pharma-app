import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FocusProvider from "./context/FocusContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FocusProvider>
      <App />
    </FocusProvider>
  </React.StrictMode>
);
