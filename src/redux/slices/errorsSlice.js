import { createSlice } from "@reduxjs/toolkit";

export const errorsSliceInitialState = {
  messages: [],
};

const slice = createSlice({
  name: "errorsSlice",
  initialState: errorsSliceInitialState,
  reducers: {
    setErrors(state, action) {
      state.messages = action.payload;
    },
  },
});

export default slice.reducer;

export const setRequestError = (err) => {
  return (dispatch, getState) => {
    if (err.data) {
      const message = Object.values(err.data).join("\n");
      console.error(message)
    } else {
      console.error("Something went wrong")
    }
    const { errorsSlice } = getState();
    dispatch(slice.actions.setErrors([...errorsSlice.messages, err]));
  };
};
