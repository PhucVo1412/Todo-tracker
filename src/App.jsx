import { useState } from 'react'
import './App.css'
import Header from './component/Header.jsx'
import Note from './component/Note.jsx'
import NoteAdder from './component/NoteAdder.jsx'
function App() {
  const note1 = {
    title : "PPL242",
    content: "Do assignment 3 now now now now now now"
  }
  return (
      <div >
        <Header/>
        <NoteAdder  />
        <Note note = {note1}/>
        
      </div>

  )
}

export default App
