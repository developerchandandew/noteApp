import { useEffect, useState } from 'react'
import './App.css';
import NoteContainer from './components/NoteContainer';
import SideBar from './components/SideBar';



function App() {
  
    const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('react_notes')) || [])
    
    const addNote=(color)=>{
      const tempnotes = [...notes];
      tempnotes.push({
        // id:notes.length+1,
        id:Date.now()+Math.floor(Math.random()*99),
        text:'',
        time: Date.now(),
        color
      });
      setNotes(tempnotes)
      
    }

   
    const deleteNote = (id) => {
      let notes = JSON.parse(localStorage.getItem('react_notes'));
      notes = notes.filter(note => note.id !== id);
      localStorage.setItem('react_notes',JSON.stringify(notes));
      setNotes(notes)
  }

    useEffect(()=>{
      localStorage.setItem('react_notes',JSON.stringify(notes))
    },[notes])

  return (
    <div className="app">
      <SideBar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote}></NoteContainer>
    </div>
  )
}

export default App
