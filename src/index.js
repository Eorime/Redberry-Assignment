import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppContextProvider from "./context/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>
);
