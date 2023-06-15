import React, { useState } from 'react'
import './Addnote.css'
export default function Addnote({updatestate}) {

    const [noteText,setNoteText]=useState('');

    function textHandler(event){

      let inp=event.target.value;

      if(inp.length <201)
      setNoteText(inp);
      
     
    }

    function savenote(){

      if(noteText.trim().length>0)
     { updatestate(noteText);
      setNoteText('');}
    }

  return (
    <div className='note newnote'>
     <textarea value={noteText} onChange={textHandler} name="" id="" cols="10" rows="8"></textarea>
     <div className='notebottom '>
      <small>{200-noteText.length} Remaining</small>
      <button onClick={savenote} className='save'>Save</button>
     </div>
    </div>
  )
}
