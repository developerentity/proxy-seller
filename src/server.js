import React from "react";
import { renderToString } from "react-dom/server";

import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import configureStore from "./client/redux/configureStore";
import Routes from "./client/Routes";

module.exports = function render(preloadedState, url, Component = Routes) {
  // Configure the store with the initial state provided
  const store = configureStore(preloadedState);

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        <Component />
      </StaticRouter>
    </Provider>
  );

  return { content };
};
