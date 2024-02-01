import { combineReducers } from "redux";
import errorsSlice from "./slices/errorsSlice";
import userSlice from "./slices/usersSlice";
import albumSlice from "./slices/albumsSlice";
import postsSlice from "./slices/postsSlice";
import loadingSlice from "./slices/loadingSlice";

const rootReducer = combineReducers({
  loadingSlice,
  errorsSlice,
  userSlice,
  albumSlice,
  postsSlice,
});

export default rootReducer;
