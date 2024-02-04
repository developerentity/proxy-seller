import React from "react";
import { renderToString } from "react-dom/server";

import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import configureStore from "./client/redux/configureStore";
import Routes from "./client/Routes";

module.exports = function render(initialState, url) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState);

  // render the App store static markup ins content variable
  let content = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </StaticRouter>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  return { content, preloadedState };
};
