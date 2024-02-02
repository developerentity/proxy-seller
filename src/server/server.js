import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import store from "../client/redux/store";
import { getUsers } from "../client/redux/slices/usersSlice";
import { Provider } from "react-redux";
import { getPostForCertainUserById } from "../client/redux/slices/postsSlice";
import { getAlbumsForCertainUserById } from "../client/redux/slices/albumsSlice";
import Routes from "../client/Routes";

const app = express();

const render = (req, res, store) => {
  const preloadedState = store.getState();

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  res.send(`
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\u003c"
          )}
        </script>
        <script src='bundle.js'></script>
      </body>
    </html>
  `);
};

app.get("/users", async (req, res) => {
  await store.dispatch(getUsers());

  render(req, res, store);
});

app.get("/users/:userId/*", async (req, res) => {
  const userId = req.params.userId;
  const path = req.params[0];

  switch (path) {
    case "albums":
      await store.dispatch(getAlbumsForCertainUserById(userId));
      break;

    case "posts":
      await store.dispatch(getPostForCertainUserById(userId));
      break;

    default:
      break;
  }

  render(req, res, store);
});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
