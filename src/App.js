import logo from './logo.svg';
import NoteList from './components/NoteList';
import './App.css';
import { useEffect, useState } from 'react';
import Addnote from './components/Addnote';
import { nanoid } from 'nanoid'
 

function App() {

  const[noteData,setnoteData] =useState([]);

  const [search,setSearch] = useState("");

  const [darkMode,setDarkMode] = useState(false);

  // add notes to local storage
  useEffect(()=>{

    localStorage.setItem('react-notes-data', JSON.stringify(noteData));

  },[noteData]);

  // retreiving notes from local storage

  useEffect(()=>{
  let data= JSON.parse(localStorage.getItem('react-notes-data'));

  if(data && data.length>0)
  setnoteData(data);


  },[]);

  function updatestate(text){

    let date = new Date();

    let newobj={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    };

    let newnote=[...noteData,newobj]
   
    setnoteData(newnote);

    console.log(noteData);
  }
  
  function deletenote(id){
    
   let newnote= noteData.filter((val)=>{
      if(val.id!=id)
      return val
    })

    setnoteData(newnote);
  }

  function searchhandler(event){

   setSearch(event.target.value);
    
  }

  function chngemode(){
    
    console.log(darkMode);
    if(darkMode)
    {
      document.documentElement.setAttribute('data-theme', 'dark');
      console.log('dark');
    }
    else
    {
      document.documentElement.setAttribute('data-theme', 'light');
      console.log('light');

    }

    setDarkMode((prev)=>!prev)
  }

  return (
  <div className='project'>

    <div className='toppro' >
      <h1 >Notes</h1>
      <button className='togglebtn' onClick={chngemode}>Toggle</button>
    </div>

    <div className='searchdiv' >
      <input className='search' placeholder='Search Here'  onChange={searchhandler} type="text" />
    </div>
     <div className='container'>
    
    <NoteList noteData={
      noteData.filter((val)=>{
        if(val.text.includes(search))
        return val
      })
      } 
updatestate={updatestate} deletenote={deletenote}/>
    
   </div>
  </div>
  );
}

export default App;
