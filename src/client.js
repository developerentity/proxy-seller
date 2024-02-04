import React from "react";
import { Provider } from "react-redux";
import configureStore from "./client/redux/configureStore";
import Routes from "./client/Routes";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

const container = document.querySelector("#app");

hydrateRoot(
  container,
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
