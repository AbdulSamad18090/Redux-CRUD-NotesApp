import { configureStore } from "@reduxjs/toolkit";
import NotesSlices from "./Slices/NotesSlices";
import SearchSlice from "./Slices/SearchSlice";
import AddNoteSlice from "./Slices/AddNoteSlice";
import DarkModeSlice from "./Slices/DarkModeSlice";

const store = configureStore({
  reducer: {
    notes: NotesSlices,
    search: SearchSlice,
    addNoteText: AddNoteSlice,
    darkModeSlice: DarkModeSlice,
  },
});

export default store;
