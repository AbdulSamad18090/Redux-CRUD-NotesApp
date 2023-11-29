import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchText",
  initialState: {
    search: ""
  },
  reducers: {
    changeText(state, action) {
        state.search = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const {changeText} = searchSlice.actions;