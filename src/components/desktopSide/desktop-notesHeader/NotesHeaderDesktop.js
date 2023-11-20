import React from 'react';
import '../desktop-notesHeader/NotesHeaderDesktop.css'
 
function NotesHeaderDesktop({title, selected, setSelected}){
    const nameInitials=title[0].name
    .split(" ")
    .map((word)=> word.charAt(0))
    .join("")
    .toUpperCase();
    
    const newHeading = title[0].name
    .split(" ")
    .map((word)=>word.charAt(0)+word.slice(1))
    .join(" ");    
    return(
        <div
        style={{cursor:'pointer',marginTop:'30px'}}
        onClick={()=>{
            setSelected(title[0].name)
        }} 
        className={`group-logo-title ${selected === title[0].name ? `highlighted-title` : null}`}>
            <div className='logo-title' style={{backgroundColor: title[0].color}}>
            {nameInitials}
            </div>
            <div className='group-title'>
            {newHeading}
            </div>
        </div>
    )
}
export default NotesHeaderDesktop;