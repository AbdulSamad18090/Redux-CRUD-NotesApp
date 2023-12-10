import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotes = createAsyncThunk("notes", async () => {
  const res = await axios.get(
    "https://65197c95818c4e98ac606e25.mockapi.io/notes"
  );
  return res.data;
});

export const PostNewNote = createAsyncThunk("postNote", async (note) => {
  await axios.post("https://65197c95818c4e98ac606e25.mockapi.io/notes", {
    title: note.title,
    description: note.description,
  });
});

export const deleteSpecificNote = createAsyncThunk("deleteNote", async (id) => {
  await axios.delete(`https://65197c95818c4e98ac606e25.mockapi.io/notes/${id}`);
  return id;
});

export const updateSpecificNote = createAsyncThunk(
  "updateNote",
  async (note) => {
    const res = await axios.put(
      `https://65197c95818c4e98ac606e25.mockapi.io/notes/${note.id}`,
      {
        title: note.title,
        description: note.description,
      }
    );
    return res.data;
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loading: false,
  },
  reducers: {
    addNote(state, action) {},
    deleteNote(state, action) {},
    updateNote(state, action) {},
    oldestFirst(state, action) {
      state.notes.sort((a, b) => b.id - a.id);
    },
    newestFirst(state, action) {
      state.notes.sort((a, b) => a.id - b.id);
    },
  },
  extraReducers: {
    [getNotes.pending]: (state) => {
      state.loading = true;
    },
    [getNotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
      setTimeout(() => {
        
      }, 1000);
      state.loading = false;
    },
    [getNotes.rejected]: (state) => {},

    [PostNewNote.pending]: (state) => {
      state.loading = true;
    },
    [PostNewNote.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [PostNewNote.rejected]: (state) => {},

    [deleteSpecificNote.pending]: (state) => {
      state.loading = true;
    },
    [deleteSpecificNote.fulfilled]: (state, action) => {
      state.loading = false;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    [deleteSpecificNote.rejected]: (state) => {},

    [updateSpecificNote.pending]: (state) => {
      state.loading = true;
    },
    [updateSpecificNote.fulfilled]: (state, action) => {
      state.loading = false;
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    [updateSpecificNote.rejected]: (state) => {},
  },
});

export default notesSlice.reducer;
export const { addNote } = notesSlice.actions;
export const { deleteNote } = notesSlice.actions;
export const { updateNote } = notesSlice.actions;
export const { oldestFirst } = notesSlice.actions;
export const { newestFirst } = notesSlice.actions;
