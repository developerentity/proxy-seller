import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appLoading: false,
};

const slice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.appLoading = action.payload;
    },
  },
});

export const { setLoading } = slice.actions;

export default slice.reducer;
