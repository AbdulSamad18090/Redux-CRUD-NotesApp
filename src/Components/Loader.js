import React from "react";
import { useSelector } from "react-redux";

export default function Loader() {
  const theme = useSelector((state) => state.darkModeSlice);

  return (
    <>
      <div className="flex gap-2 justify-center items-center font-thin h-[250px]">
        <div className="loader ease-linear rounded-full border-r-2 border-t-2 border-yellow-500 h-12 w-12 animate-spin"></div>
        <h1
          className={`${theme.isDarkMode ? "text-gray-100" : " text-gray-800"}`}
        >
          LOADING...
        </h1>
      </div>
    </>
  );
}
