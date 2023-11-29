import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AddNote from "./Components/AddNote";
import UpdateNote from "./Components/UpdateNote";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.darkModeSlice);

  return (
    <BrowserRouter>
      <div
        className={`flex flex-col items-center sm:p-10 px-2 py-10 ${
          theme.isDarkMode ? " bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className=" font-bold text-[25px] text-center text-gray-400">
          Notes App - React-Redux-Toolkit - Tailwind Css
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddNote />} />
          <Route path="/update/*" element={<UpdateNote />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
