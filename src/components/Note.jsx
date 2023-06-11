import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Note(props) {

  console.log("Executed");

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={(event)=>{
        props.onDelete(props.id,event)
      }}>
        <Fab aria-label="edit">
          <DeleteIcon/>
        </Fab>
      </button>
    </div>
  );
}

export default Note;
