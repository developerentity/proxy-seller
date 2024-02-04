import { albumSliceInitialState } from "./slices/albumsSlice";
import { errorsSliceInitialState } from "./slices/errorsSlice";
import { loadingSliceInitialState } from "./slices/loadingSlice";
import { postsSliceInitialState } from "./slices/postsSlice";
import { usersSliceInitialState } from "./slices/usersSlice";

export const initialState = {
  loadingSlice: loadingSliceInitialState,
  errorsSlice: errorsSliceInitialState,
  userSlice: usersSliceInitialState,
  albumSlice: albumSliceInitialState,
  postsSlice: postsSliceInitialState,
};
