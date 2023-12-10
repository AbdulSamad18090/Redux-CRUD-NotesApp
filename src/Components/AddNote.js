import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDescription, setTitle } from "../Store/Slices/AddNoteSlice";
import { PostNewNote, addNote } from "../Store/Slices/NotesSlices";

export default function AddNote() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setNoteTitle] = useState("");
  const [description, setNoteDescription] = useState("");
  const theme = useSelector((state) => state.darkModeSlice);

  return (
    <div
      className={`flex flex-col justify-center items-center text-center my-10 p-2 sm:w-[500px] w-full bg-slate-100 border border-slate-300 rounded shadow-lg
    ${theme.isDarkMode ? " bg-slate-300" : "bg-slate-100"}
    `}
    >
      <h1 className=" sm:text-[30px] text-[25px] text-slate-500 font-thin">
        Add Note
      </h1>
      <input
        type="text"
        name="title"
        id="title"
        autoComplete="false"
        placeholder="Title"
        className="text-gray-500 px-2 py-1 rounded border border-gray-700 my-2 w-full focus:ring-yellow-500 focus:border-yellow-500"
        onChange={(event) => {
          setNoteTitle(event.target.value);
          dispatch(setTitle(event.target.value));
        }}
      />
      <textarea
        type="text"
        name="description"
        id="description"
        autoComplete="false"
        placeholder="Description"
        rows={4}
        className="text-gray-500 px-2 py-1 rounded border border-gray-700 w-full focus:ring-yellow-500 focus:border-yellow-500"
        onChange={(event) => {
          setNoteDescription(event.target.value);
          dispatch(setDescription(event.target.value));
        }}
      />
      <span className="flex mt-4 w-full">
        <button
          className="border border-gray-700 w-full px-1 py-2 rounded-l bg-gray-700 text-yellow-500"
          onClick={() => {
            navigate("/");
            setNoteTitle("");
            setNoteDescription("");
          }}
        >
          CANCEL
        </button>
        <button
          className="border border-gray-700 w-full px-1 py-2 rounded-r bg-yellow-500 text-gray-700"
          onClick={() => {
            dispatch(PostNewNote({ title, description }));
            dispatch(addNote({title, description}))
            navigate("/");
            setNoteTitle("");
            setNoteDescription("");

          }}
        >
          SUBMIT
        </button>
      </span>
    </div>
  );
}
