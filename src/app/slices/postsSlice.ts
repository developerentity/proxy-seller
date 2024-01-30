import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { IPost, IPostsInitialState } from "../../interfaces/interfaces";
import { RootState } from "../store";
import { setRequestError } from "./errorsSlice";
import { setLoading } from "./loadingSlice";
import { fetchPostsForCertainUserById } from "../../requests/requests";

const initialState: IPostsInitialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Array<IPost>>) {
      state.posts = [...action.payload];
    },
  },
});

const { setPosts } = postsSlice.actions;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const getPostForCertainUserById = (userId: number): AppThunk<void> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchPostsForCertainUserById(userId);
      dispatch(setPosts(response));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setRequestError(error));
      dispatch(setLoading(false));
    }
  };
};

export default postsSlice.reducer;
