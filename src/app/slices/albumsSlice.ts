import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { IAlbum, IAlbumsInitialState } from "../../interfaces/interfaces";
import { RootState } from "../store";
import { setRequestError } from "./errorsSlice";
import { setLoading } from "./loadingSlice";
import { fetchAlbumsForCertainUserById } from "../../requests/requests";

const initialState: IAlbumsInitialState = {
  albums: [],
};

const albumsSlice = createSlice({
  name: "albumsSlice",
  initialState,
  reducers: {
    setAlbums(state, action: PayloadAction<Array<IAlbum>>) {
      state.albums = [...action.payload];
    },
  },
});

const { setAlbums } = albumsSlice.actions;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const getAlbumsForCertainUserById = (userId: string): AppThunk<void> => {
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
