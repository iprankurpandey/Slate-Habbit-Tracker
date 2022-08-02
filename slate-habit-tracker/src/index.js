import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import "./index.css";
import { Chart as ChartJS } from "chart.js/auto";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
