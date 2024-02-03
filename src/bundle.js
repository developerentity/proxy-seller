import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./client/redux/configureStore";
import Routes from "./client/Routes";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

// Create a fresh store
const store = configureStore();

render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#app")
);
