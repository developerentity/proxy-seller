import { createSlice } from "@reduxjs/toolkit";
import { setRequestError } from "./errorsSlice";
import { setLoading } from "./loadingSlice";
import { fetchPostsForCertainUserById } from "../../requests/requests";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = [...action.payload];
    },
  },
});

const { setPosts } = postsSlice.actions;

export const getPostForCertainUserById = (userId) => {
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
