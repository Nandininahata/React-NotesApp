import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../mobile-notesHeader/MobileNotesHeader.css'

function MobileNotesHeader({title, selected, setSelected}){
    const navigate=useNavigate();
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
            localStorage.setItem('selected',title[0].name)
            setSelected(title[0].name)
            navigate('/notesPage')    
        }} 
        className={`mobile-group-logo-title ${selected === title[0].name ? `mobile-highlighted-title` : null}`}>
            <div className='mobile-logo-title' style={{backgroundColor: title[0].color}}>
            {nameInitials}
            </div>
            <div className='mobile-group-title'>
            {newHeading}
            </div>
        </div>

    )
}
export default MobileNotesHeader;