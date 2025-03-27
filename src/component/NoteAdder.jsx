import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
const NoteAdder = (props) => {

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
        props.onAdd(note)
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