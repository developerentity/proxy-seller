import { createSlice } from "@reduxjs/toolkit";
import { setRequestError } from "./errorsSlice";
import { setLoading } from "./loadingSlice";
import { fetchAlbumsForCertainUserById } from "../../requests/requests";

const initialState = {
  albums: [],
};

const albumsSlice = createSlice({
  name: "albumsSlice",
  initialState,
  reducers: {
    setAlbums(state, action) {
      state.albums = [...action.payload];
    },
  },
});

const { setAlbums } = albumsSlice.actions;

export const getAlbumsForCertainUserById = (userId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAlbumsForCertainUserById(userId);
      dispatch(setAlbums(response));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setRequestError(error));
      dispatch(setLoading(false));
    }
  };
};

export default albumsSlice.reducer;
