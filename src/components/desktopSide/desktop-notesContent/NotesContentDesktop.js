import React from 'react';
import '../desktop-notesContent/NotesContentDesktop.css'

function NotesContentDesktop({note}){
    return(
        <div className='desktop-notes-content-container'>
            <div className='notes-time-details'>
                <p className='note-time'>{note.time}</p>
                <p className='note-date'>{note.date}</p>    
            </div>
            <div className='notes-content-details'>
                <p className='note-content'>{note.content}</p>
            </div>
        </div>
    )
}
export default NotesContentDesktop;