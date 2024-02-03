import { createSlice } from "@reduxjs/toolkit";

export const loadingSliceInitialState = {
  appLoading: false,
};

const slice = createSlice({
  name: "loadingSlice",
  initialState: loadingSliceInitialState,
  reducers: {
    setLoading(state, action) {
      state.appLoading = action.payload;
    },
  },
});

export const { setLoading } = slice.actions;

export default slice.reducer;
