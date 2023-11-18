import React, { useState } from "react";

function CreateArea({addNote}) {
  const[note, setNote] =useState({title:"", content:""})

  function handleClick(e){
    addNote(note);
    setNote({title:"", content:""})
    e.preventDefault()
  }


  function handleChange(e){
    const {name, value} = e.target
    setNote((prevValue) =>{
      return({
        ...prevValue,
        [name]:value
      })
    })
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
