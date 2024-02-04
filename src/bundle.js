import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

// Create a fresh store
const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#app")
);
