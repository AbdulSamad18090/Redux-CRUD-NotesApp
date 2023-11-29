import axios from "axios";

  const res = await axios.get(
    "https://65197c95818c4e98ac606e25.mockapi.io/notes"
  );
  const notes = res.data;
  

export {notes};