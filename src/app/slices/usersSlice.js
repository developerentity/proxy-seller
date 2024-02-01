import { createSlice } from "@reduxjs/toolkit";
import { setRequestError } from "./errorsSlice";
import { setLoading } from "./loadingSlice";
import { fetchAllUsers } from "../../requests/requests";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = [...action.payload];
    },
  },
});

const { setUsers } = usersSlice.actions;

export const getUsers = () => {
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
