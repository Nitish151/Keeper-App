import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from "@mui/material";


function Note(props) {

  function handleClick(){
    props.onDelete(props.id)
  }

  return (
    <div
      // class="block p-3 max-w-sm bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300
      //       rounded-lg border border-gray-200 ml-2 mr-2 mt-4 drop-shadow-xl"
      className="block bg-white rounded-md shadow-lg shadow-slate-300 p-3 w-64 m-4 float-left "
      >

      <div><h1 class=" mb-2 text-xl font-bold whitespace-pre-wrap break-words">{props.title}</h1></div>

      <div><p class="text-l mb-3 whitespace-pre-wrap break-words">{props.content}</p></div>
      <Fab className="float-right bg-purple-300  w-12 h-12 rounded-full text-white hover:bg-gray-300 hover:text-purple-300" onClick={handleClick}><DeleteIcon/></Fab>
    </div>
  );
}

export default Note;
