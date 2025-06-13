import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: null,
  },
  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeNameFilter } = slice.actions;

export default slice.reducer;
