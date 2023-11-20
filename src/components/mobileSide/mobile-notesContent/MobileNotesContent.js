import React from 'react'
import '../mobile-notesContent/MobileNotesContent.css'

function MobileNotesContent({note}){
    return(
        <div className='mobile-notes-content-container'>
            <div className='mobile-notes-time-details'>
                <p className='mobile-note-time'>{note.time}</p>
                <p className='mobile-note-date'>{note.date}</p>    
            </div>
            <div className='mobile-notes-content-details'>
                <p className='mobile-note-content'>{note.content}</p>
            </div>
        </div>
    )
}
export default MobileNotesContent;