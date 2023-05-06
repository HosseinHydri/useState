import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Welcome from "./Welcome";
import Array from "./Array";
import ArrayNums from "./ArrayNums";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Welcome />
    {/* <Array /> */}
    <ArrayNums />
  </React.StrictMode>
);
