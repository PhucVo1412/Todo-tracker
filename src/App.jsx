import { useState } from 'react'
import './App.css'
import Header from './component/Header.jsx'
import Note from './component/Note.jsx'
import NoteAdder from './component/NoteAdder.jsx'

function App() {
  const [notes,setNotes] = useState([])
  const [dateFilter, setDateFilter] = useState('all'); // 'all' | 'today' | 'week' | 'month'

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

  const filteredNotes = notes.filter(note =>{
    if (dateFilter === 'all') return true;

    const noteDate = new Date(note.time);
    const today = new Date();

    switch (dateFilter){
      case 'today':
        return noteDate.toDateString() === today.toDateString();
      case 'week':
        const oneWeekAgo = new Date(today);
        oneWeekAgo.setDate(today.getDate() - 7);
        return noteDate >= oneWeekAgo;
      case 'month':
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        return noteDate >= oneMonthAgo;
      default:
        return true;

    }
  })
  
  return (
      <div >
        <Header/>
        <div className="date-filter">
        <button onClick={() => setDateFilter('all')}>All Notes</button>
        <button onClick={() => setDateFilter('today')}>Today</button>
        <button onClick={() => setDateFilter('week')}>This Week</button>
        <button onClick={() => setDateFilter('month')}>This Month</button>
      </div>
        <NoteAdder onAdd = {addNote}  />
        {filteredNotes .map((noteItem,index)=> {
          return (
            <Note
              key = {index}
              id = {index}
              title ={noteItem.title}
              content = {noteItem.content}
              time = {noteItem.time}
              onDelete = {deleteNote}
            />
          )
        })}
        
      </div>

  )
}

export default App
