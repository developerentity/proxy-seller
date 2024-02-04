import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import configureStore from "./redux/configureStore";
import Routes from "./Routes";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

module.exports = function render(preloadedState, url, Component = Routes) {
  // Configure the store with the initial state provided
  const store = configureStore(preloadedState);

  const sheet = new ServerStyleSheet();

  // render the App store static markup ins content variable
  let content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={url} context={{}}>
          <GlobalStyle />
          <Component />
        </StaticRouter>
      </Provider>
    )
  );

  const styles = sheet.getStyleTags();

  return { content, styles };
};
