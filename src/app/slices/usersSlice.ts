import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { IUser, IUsersInitialState } from "../../interfaces/interfaces";
import { RootState } from "../store";
import { setRequestError } from "./errorsSlice";
import { setLoading } from "./loadingSlice";
import { fetchAllUsers } from "../../requests/requests";

const initialState: IUsersInitialState = {
  sortBy: null,
  users: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<Array<IUser>>) {
      state.users = [...action.payload];
    },
    setSortOrder(state, action: PayloadAction<"asc" | "desc" | null>) {
      state.sortBy = action.payload;

      if (action.payload === "asc") {
        state.users.sort((a, b) => a.username.localeCompare(b.username));
      } else if (action.payload === "desc") {
        state.users.sort((a, b) => b.username.localeCompare(a.username));
      }
    },
  },
});

const { setUsers } = usersSlice.actions;
export const { setSortOrder } = usersSlice.actions;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const getUsers = (): AppThunk<void> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchAllUsers();
      dispatch(setUsers(response));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setRequestError(error));
      dispatch(setLoading(false));
    }
  };
};

export default usersSlice.reducer;
