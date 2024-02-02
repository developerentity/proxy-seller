import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./client/Routes";

ReactDOM.hydrate(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();
