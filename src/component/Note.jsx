import React from "react";

const Note = (props) => {

    return (
    <div>
        <div className = 'note'>
            <h1> This is the title</h1>
            <p>This is the content</p>
        </div>
        <div className = 'note'>
            <h1> {props.note.title}</h1>
            <p> {props.note.content}</p>
        </div>
    </div>);
}

export default Note;