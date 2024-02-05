import express from "express";
import path from "path";
import template from "./src/template";
import ssr from "./src/server";
import configureStore from "./src/redux/configureStore";
import { initialState } from "./src/redux/initialState";
import { getUsers } from "./src/redux/slices/usersSlice";
import { getAlbumsForCertainUserById } from "./src/redux/slices/albumsSlice";
import { getPostForCertainUserById } from "./src/redux/slices/postsSlice";
import NoMatch from "./src/components/NoMatch";

const app = express();

const store = configureStore(initialState);

// Serving static files
app.use("/build", express.static(path.resolve(__dirname, "build")));
// hide powered by express
app.disable("x-powered-by");
// start the server
app.listen(process.env.PORT || 3000);

const renderAndSend = async (req, res, additionalActions = []) => {
  try {
    for (const action of additionalActions) {
      await store.dispatch(action);
    }
    const preloadedState = store.getState();
    const { content, styles } = ssr(preloadedState, req.url);
    const response = template(
      "Server Rendered Page",
      preloadedState,
      content,
      styles
    );
    res.setHeader("Cache-Control", "build, max-age=604800");
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

app.get("/", (req, res) => {
  renderAndSend(req, res, [getUsers()]);
});

app.get("/:userId/albums", (req, res) => {
  const userId = req.params.userId;
  renderAndSend(req, res, [getUsers(), getAlbumsForCertainUserById(userId)]);
});

app.get("/:userId/posts", (req, res) => {
  const userId = req.params.userId;
  renderAndSend(req, res, [getUsers(), getPostForCertainUserById(userId)]);
});

app.use(async (req, res) => {
  const preloadedState = store.getState();
  const { content, styles } = ssr(preloadedState, req.url, NoMatch);
  const response = template("Page Not Found", preloadedState, content, styles);
  res.status(404).send(response);
});
