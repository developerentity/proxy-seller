import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import UsersComponent from "./components/Users";
import UserAlbumsComponent from "./components/UserAlbums";
import UserPostsComponent from "./components/UserPosts";
import NoMatch from "./components/NoMatch";

const Routes = () => {
  return (
    <Provider store={store}>
      <Switch>
        {/* <Route path="/" element={<Navigate replace to="/users" />} /> */}
        <Route path="users" element={<UsersComponent />} />
        <Route path="users/:userId/albums" element={<UserAlbumsComponent />} />
        <Route path="users/:userId/posts" element={<UserPostsComponent />} />
        <Route path="*" element={<NoMatch />} />
      </Switch>
    </Provider>
  );
};

export default Routes;
