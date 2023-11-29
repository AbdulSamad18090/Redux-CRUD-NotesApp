import { useDispatch } from "react-redux";
import { addNote } from "../Store/Slices/NotesSlices";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="flex justify-between w-full font-thin bg-gray-700 text-white rounded sm:p-4 p-2 my-4">
      <h1 className=" text-yellow-500 text-[20px]">Hello Notes App</h1>
      <button
        className=" bg-yellow-500 rounded text-gray-700 py-1 px-2"
        onClick={() => {
          navigate("/create");
          dispatch(addNote());
        }}
      >
        Add Note
      </button>
    </header>
  );
}
