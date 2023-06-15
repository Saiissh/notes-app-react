import React from 'react'
import Note from './Note'
import './NoteList.css';
import Addnote from './Addnote';
export default function NoteList({noteData,updatestate,deletenote}) {
  return (
    <div className='noteslist'>
     {
        noteData.map((val,i)=>{
            return <Note key={val.id} noteData={noteData[i]} deletenote={deletenote} />;
        })
     }
     <Addnote updatestate={updatestate} ></Addnote>
    </div>
  )
}
