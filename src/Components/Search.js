import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../Store/Slices/SearchSlice";
import { newestFirst, oldestFirst } from "../Store/Slices/NotesSlices";
import { toggleDarkMode } from "../Store/Slices/DarkModeSlice";

export default function Search() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.darkModeSlice);

  return (
    <>
      <div className="md:flex hidden justify-between w-full items-center text-center">
        <span className="flex">
          <h1 className="mr-2 text-gray-500">Dark Mode</h1>
          <input
            className="rounded mt-1 bg-slate-100 border-slate-500 text-yellow-500 focus:ring-yellow-500"
            type="checkbox"
            name="darkmode"
            id="darkmode"
            checked={theme.isDarkMode}
            onChange={() => {
              dispatch(toggleDarkMode());
            }}
          />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="false"
          placeholder="Search..."
          className={`text-gray-500 px-2 py-1 rounded border border-gray-700 mb-5 w-[350px] focus:ring-yellow-500 focus:border-yellow-500
            ${theme.isDarkMode ? "bg-gray-300" : "bg-gray-100"}
          `}
          onChange={(event) => {
            dispatch(changeText(event.target.value));
          }}
        />
        <span className="">
          <button
            className="border border-gray-700 w-[50px] rounded-l bg-gray-700 text-yellow-500"
            onClick={() => {
              dispatch(newestFirst());
            }}
          >
            New
          </button>
          <button
            className="border border-gray-700 w-[50px] rounded-r bg-yellow-500 text-gray-700"
            onClick={() => {
              dispatch(oldestFirst());
            }}
          >
            Old
          </button>
        </span>
      </div>
      <div className="flex flex-col md:hidden justify-between w-full items-center text-center">
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="false"
          placeholder="Search..."
          className={`text-gray-500 px-2 py-1 rounded border border-gray-700 mb-5 md:w-[350px] w-full focus:ring-yellow-500 focus:border-yellow-500
            ${theme.isDarkMode ? "bg-gray-300" : "bg-gray-100"}
          `}
          onChange={(event) => {
            dispatch(changeText(event.target.value));
          }}
        />
        <div className="flex justify-between w-full mb-4">
          <span className="flex">
            <h1 className=" text-gray-500 mr-2">Dark Mode</h1>
            <input
              className="rounded mt-1 bg-slate-100 border-slate-500 text-yellow-500 focus:ring-yellow-500"
              type="checkbox"
              name="darkmode"
              id="darkmode"
              checked={theme.isDarkMode}
              onChange={() => {
                dispatch(toggleDarkMode());
              }}
            />
          </span>
          <span className="">
            <button
              className="border border-gray-700 w-[50px] rounded-l bg-gray-700 text-yellow-500"
              onClick={() => {
                dispatch(newestFirst());
              }}
            >
              New
            </button>
            <button
              className="border border-gray-700 w-[50px] rounded-r bg-yellow-500 text-gray-700"
              onClick={() => {
                dispatch(oldestFirst());
              }}
            >
              Old
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
