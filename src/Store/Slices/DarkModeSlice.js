import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "DarkModeSlice",
  initialState: {
    isDarkMode: localStorage.getItem("isDarkMode") === "true",
  },
  reducers: {
    toggleDarkMode(state, action) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode);
    },
  },
});

export default darkModeSlice.reducer;
export const { toggleDarkMode } = darkModeSlice.actions;
