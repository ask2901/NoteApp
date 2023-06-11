import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [final,setFinal]=React.useState([]);

  function handleClick(input,event)
  {
    setFinal((prev)=>{
      return [...prev,input];
    });

    fetch("/register",)

    console.log(input);
    event.preventDefault();
  }

  function handleDelete(index,event)
  {
    setFinal((prev)=>{
      return prev.filter((element,idx)=>
      {
        return index!==idx;
      });
    })

    event.preventDefault();
  }

  return (
    <div>
      <Header/>
      <CreateArea onSubmit={handleClick}/>

      {final.map((element,index)=>
      (
        <Note key={index} onDelete={handleDelete} id={index} title={element.title} content={element.content} />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
