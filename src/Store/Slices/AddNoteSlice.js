import { createSlice } from "@reduxjs/toolkit";

const addNoteSlice = createSlice({
  name: "addNoteText",
  initialState: {
    title: localStorage.getItem("title"),
    description: localStorage.getItem("description"),
    id: null,
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export default addNoteSlice.reducer;
export const { setTitle } = addNoteSlice.actions;
export const { setDescription } = addNoteSlice.actions;
export const { setId } = addNoteSlice.actions;
