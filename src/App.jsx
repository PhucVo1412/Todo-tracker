import { useState } from 'react'
import './App.css'
import Header from './component/Header.jsx'
import Note from './component/Note.jsx'
import NoteAdder from './component/NoteAdder.jsx'

function App() {
  const [notes,setNotes] = useState([])


  const addNote = (newNote) => {
    setNotes(prevNotes => {return [...prevNotes, newNote]})
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem,index) => {
        return index !== id; 
      })

    })
  }

  
  return (
      <div >
        <Header/>
        <NoteAdder onAdd = {addNote}  />
        {notes.map((noteItem,index)=> {
          return (
            <Note
              key = {index}
              id = {index}
              title ={noteItem.title}
              content = {noteItem.content}
              onDelete = {deleteNote}
            />
          )
        })}
        
      </div>

  )
}

export default App
