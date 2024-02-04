import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import UsersComponent from "./components/Users";
import UserAlbumsComponent from "./components/UserAlbums";
import UserPostsComponent from "./components/UserPosts";
import NoMatch from "./components/NoMatch";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<UsersComponent />} />
      <Route path="/:userId/albums" element={<UserAlbumsComponent />} />
      <Route path="/:userId/posts" element={<UserPostsComponent />} />
      <Route path="*" element={<NoMatch />} />
    </Switch>
  );
};

export default Routes;
