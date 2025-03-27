import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from "react";

const NoteAdder = (props) => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString({
        month: 'short',    
        day: 'numeric',    
        year: 'numeric',  
        hour: '2-digit',   
        minute: '2-digit', 
        hour12: true,      
    })
);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleString({
                month: 'short',    
                day: 'numeric',    
                year: 'numeric',  
                hour: '2-digit',   
                minute: '2-digit', 
                hour12: true,      
            }));
        }, 1000);
        
        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const [note, setNote] = useState({
        title : "",
        content: "",

    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value 
            };
        });
    }

    const submitNote = (e) => {
        props.onAdd({
            ...note,
            time: new Date().toISOString()
        })
        setNote({
            title :"",
            content:""
        });
        e.preventDefault();
    }
    return (
    <div>
        {<form>
            <input
                name = "title"
                onChange = {handleChange}
                value = {note.title}
                placeholder="Your Title Here"
            />
            <hr/>
            <textarea 
                name = "content"
                onChange = {handleChange}
                value = {note.content}
                placeholder= "Your Note Here"
                rows = "3"
            />
            <button onClick = {submitNote}><AddIcon/></button> 
        </form>}
    </div>)
}

export default NoteAdder;