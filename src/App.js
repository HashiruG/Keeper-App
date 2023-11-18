import React, { useState } from "react";
import Note from "./components/Note";
import CreateArea from "./components/CreateNote";

function App() {
  
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

  const[notes,setNotes] = useState([])

  function handleNotes(note){
    setNotes((prevValue) =>{
      return([...prevValue, note])
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <header>
        <h1>Keeper App</h1>
      </header>
      <CreateArea addNote={handleNotes}/>
      {notes.map((item, index)=>{
        return(<Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote}/>)
      })}
      <footer>
        <p>copyright © {currentYear}</p>
      </footer>
    </div>
  );
}

export default App;


