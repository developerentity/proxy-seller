import React from "react";
import { hydrateRoot } from 'react-dom/client';
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./client/Routes";

const container = document.getElementById('root');
if (container) {
  hydrateRoot(
    container,
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
}

reportWebVitals();