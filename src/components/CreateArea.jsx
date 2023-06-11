import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [isExpanded,setExpanded]=React.useState(false);
  const [input,setInput]=React.useState(
    {
      title:"",
      content:""
    }
  );

  function handleChange(event)
  {
    const value=event.target.value;
    const name=event.target.name;
    setInput((prev)=>{
      return {
        ...prev,
        [name]:value
    }});
  }

  function handleExpand()
  {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note" action="post">
        {isExpanded && <input name="title" onChange={handleChange} value={input.title} placeholder="Title" />}
        <textarea onClick={handleExpand} caretColor="transparent" name="content" onChange={handleChange} value={input.content} placeholder="Take a note..." rows={isExpanded ?"3":"1" }/>
        <Zoom in={isExpanded}>
          <Fab onClick={(event)=> {
            props.onSubmit(input,event),
            setInput({title:"",content:""})}}>
              <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
