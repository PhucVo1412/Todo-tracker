import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    const formattedTime = new Date(props.time).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });


    function handleDelete () {
        props.onDelete(props.id);
    }
    return (
    <div>
        <div className = 'note'>
            <h1> {props.title}</h1>
            <p> {props.content}</p>
            <small>{formattedTime}</small>
            <button onClick = {handleDelete}> <DeleteIcon/></button>
        </div>
    </div>);
}

export default Note;