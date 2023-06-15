import React from 'react'
import './Note.css'
import { AiFillDelete } from 'react-icons/ai';

export default function Note({noteData,deletenote}) {
  
//   console.log(noteData);
  let text=noteData.text
  let id=noteData.id
  let date=noteData.date

  // console.log(text,id,date);
  return (
    <div className='note'>
      <div>
        {text}
      </div>

      <div className='notebottom'>
        <div>{date}</div>
        <div onClick={()=>{deletenote(id)}} className='delicon' >< AiFillDelete /></div>
      </div>
    </div>
  )
}
