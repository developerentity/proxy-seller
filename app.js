import express from "express";
import path from "path";
import template from "./src/template";
import ssr from "./src/server";
import configureStore from "./src/client/redux/configureStore";
import { initialState } from "./src/client/redux/initialState";
import { getUsers } from "./src/client/redux/slices/usersSlice";
import { getAlbumsForCertainUserById } from "./src/client/redux/slices/albumsSlice";
import { getPostForCertainUserById } from "./src/client/redux/slices/postsSlice";

const app = express();

const store = configureStore(initialState);

// Serving static files
app.use("/assets", express.static(path.resolve(__dirname, "assets")));
// hide powered by express
app.disable("x-powered-by");
// start the server
app.listen(process.env.PORT || 3000);

// server rendered home page
app.get("/", async (req, res) => {
  try {
    await store.dispatch(getUsers());
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
  const preloadedState = store.getState();

  const { content } = ssr(preloadedState, req.url);
  const response = template("Server Rendered Page", preloadedState, content);
  res.setHeader("Cache-Control", "assets, max-age=604800");
  res.send(response);
});

app.get("/:userId/*", async (req, res) => {
  const userId = req.params.userId;
  const urlPath = req.params[0];

  try {
    switch (urlPath) {
      case "albums":
        await store.dispatch(getUsers());
        await store.dispatch(getAlbumsForCertainUserById(userId));
        break;

      case "posts":
        await store.dispatch(getUsers());
        await store.dispatch(getPostForCertainUserById(userId));
        break;

      default:
        break;
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
  const preloadedState = store.getState();

  const { content } = ssr(preloadedState, req.url);
  const response = template("Server Rendered Page", preloadedState, content);
  res.setHeader("Cache-Control", "assets, max-age=604800");
  res.send(response);
});
