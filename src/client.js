import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./client/redux/configureStore";
import Routes from "./client/Routes";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#app")
);
