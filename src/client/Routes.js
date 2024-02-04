import React, { Suspense, lazy } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import NoMatch from "./components/NoMatch";

const UsersComponent = lazy(() => import("./components/Users"));
const UserAlbumsComponent = lazy(() => import("./components/UserAlbums"));
const UserPostsComponent = lazy(() => import("./components/UserPosts"));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" element={<UsersComponent />} />
        <Route path="/:userId/albums" element={<UserAlbumsComponent />} />
        <Route path="/:userId/posts" element={<UserPostsComponent />} />
        <Route path="*" element={<NoMatch />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
