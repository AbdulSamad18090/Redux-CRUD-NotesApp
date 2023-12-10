import React, { useEffect, useState } from "react";
import Search from "./Search";
import { deleteSpecificNote, getNotes } from "../Store/Slices/NotesSlices";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { MdDelete } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { setDescription, setId, setTitle } from "../Store/Slices/AddNoteSlice";

export default function NotesContainer() {
  const data = useSelector((state) => state.notes);
  const searchText = useSelector((state) => state.search);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.darkModeSlice);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const handleItemClick = (itemId) => {
    setClickedItemId(itemId);
  };

  return (
    <>
      <h1 className=" text-[30px] text-gray-500 my-1">Your Notes</h1>
      <Search />
      {data.loading ? (
        <Loader />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 w-full">
          {data.notes
            .filter((note) => {
              if (searchText.search == "") {
                return note;
              } else if (
                note.title
                  .toLowerCase()
                  .includes(searchText.search.toLowerCase())
              ) {
                return note;
              }
            })
            .reverse()
            .map((note, id) => {
              return (
                <div
                  key={id}
                  className={`relative border-[1px] border-slate-300 h-[200px] p-2 rounded shadow-md
                    ${theme.isDarkMode ? " bg-gray-400" : "bg-gray-100"}
                  `}
                >
                  <CiMenuKebab
                    className={`${
                      isOpen ? "" : "flex"
                    } float-right cursor-pointer`}
                    onClick={(e) => {
                      setIsOpen(true);
                      handleItemClick(note.id);
                    }}
                  />
                  {clickedItemId === note.id && (
                    <>
                      <div
                        className={`${
                          isOpen ? "flex" : "hidden"
                        } absolute right-4 flex-col float-right mt-4 rounded p-2 pt-5 border border-slate-400 shadow-lg w-fit ${
                          theme.isDarkMode
                            ? " bg-gray-800 text-gray-100"
                            : "bg-white"
                        }`}
                      >
                        <hr className="" />
                        <IoMdClose
                          className={`${
                            isOpen ? "flex" : "hidden"
                          } cursor-pointer text-[12px] absolute top-1 right-1`}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        />
                        <h1
                          className="flex cursor-pointer font-thin"
                          onClick={() => {
                            navigate(`/update/${note.id}`);
                            dispatch(setTitle(note.title));
                            dispatch(setDescription(note.description));
                            dispatch(setId(note.id));
                            localStorage.setItem("title", note.title);
                            localStorage.setItem(
                              "description",
                              note.description
                            );
                          }}
                        >
                          <MdModeEdit className=" mt-1 mr-1" />
                          Edit
                        </h1>
                        <h1
                          className="flex cursor-pointer font-thin"
                          onClick={() => {
                            dispatch(deleteSpecificNote(note.id));
                          }}
                        >
                          <MdDelete className=" mt-1 mr-1" /> Delete
                        </h1>
                      </div>
                    </>
                  )}
                  <h1 className=" font-bold overflow-y-auto text-yellow-500">
                    {note.title}
                  </h1>
                  <p
                    className={` font-thin ${
                      theme.isDarkMode ? "text-gray-800" : "text-gray-500"
                    }`}
                  >
                    {note.description}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
