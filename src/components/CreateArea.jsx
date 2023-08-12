import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const{name, value} = event.target;
    setNote(prevNote => {
       return{
        ...prevNote,
        [name]: value
       }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
  })
    event.preventDefault();
  }

  return (
    <div className="shadow-lg shadow-slate-300 w-80  mt-10 mx-10 h-40">
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          className="px-4 w-80 h-10 outline-none"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Content "
          className="block w-80 px-4 outline-none resize-none"
          rows="3"
          onChange={handleChange}
        ></textarea>
        <Fab
          className="float-right mr-4 bg-purple-300  w-12 h-12 mt-6 rounded-full text-white hover:bg-gray-300 hover:text-purple-300"
          onClick={submitNote}
        >
          <AddIcon/>
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
