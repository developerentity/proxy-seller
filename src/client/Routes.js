import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/configureStore";
// import UsersComponent from "./components/Users";
// import UserAlbumsComponent from "./components/UserAlbums";
// import UserPostsComponent from "./components/UserPosts";
// import NoMatch from "./components/NoMatch";

const Routes = () => {
  return (
    // <Provider store={store}>
    <div>
      static
      <Loading />
     
        {/* <Switch>
          <Route path="/" element={<Loading />} />
          <Route path="/" element={<Navigate replace to="/users" />} />
          <Route path="users" element={<UsersComponent />} /> 
        <Route path="users/:userId/albums" element={<UserAlbumsComponent />} />
        <Route path="users/:userId/posts" element={<UserPostsComponent />} />
        <Route path="*" element={<NoMatch />} />
        </Switch> */}
  
    </div>
    // </Provider>
  );
};

export default Routes;

const Loading = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <div>Loading... FROM ROUTER</div>
      <button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </button>
    </div>
  );
};
