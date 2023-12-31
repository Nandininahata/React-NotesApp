import React from 'react'
import {useState, useEffect} from 'react'
import enter from '../../../images/enter.png'
import back from '../../../images/back button.png'
import { useNavigate } from 'react-router-dom';
import MobileNotesContent from '../mobile-notesContent/MobileNotesContent';
import '../mobile-Notes/NotesMob.css'

function NotesMob({selected, setSelected, notes, setNotes}){
    const [text, setText]=useState('');
    const [bgcolor, setBgcolor]=useState('#fff');
    const [initials,setInitials]=useState('');
    const [selectedTitle,setSelectedTitle]=useState('');
    const navigate=useNavigate();
    function getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
          return 'th';
        }
        switch (day % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
    }
    const formatTime = (timeStr) => {
        const options = {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        return new Date(timeStr).toLocaleTimeString(undefined, options);
    };

    useEffect(()=>{
        setSelected(localStorage.getItem('selected')|| '');
        setNotes(JSON.parse(localStorage.getItem(selected))|| []);
        const groupNames=JSON.parse(localStorage.getItem('groupNames'));
        const selectedGroup=groupNames.find((group)=> group.name===selected);
        if(selectedGroup){
            setBgcolor(selectedGroup.color);
            setInitials(
                selectedGroup.name
                .split(' ')
                .map((word)=>word.charAt(0))
                .join('')
                .toUpperCase()
            );
            setSelectedTitle(
                selectedGroup.name
                .split(' ')
                .map((word)=>word.charAt(0).toUpperCase()+word.slice(1))
                .join(' ')
            )
        }
    },[setSelected,setNotes,selected]);

    const handleSaveNotes=()=>{
        const notes=JSON.parse(localStorage.getItem(selected)) || [];
        const dateObj = new Date();
        const day = dateObj.getDate();
        const month = dateObj.toLocaleString('default', { month: 'long' });
        const year = dateObj.getFullYear();
        const formattedDate = `${day}${getDaySuffix(day)} ${month}, ${year}`;
        const newNoteObject={
            id: Date.now(),
            title: selected,
            content: text,
            date: formattedDate,
            time: formatTime(new Date().toUTCString()),
        };
        notes.push(newNoteObject);
        localStorage.setItem(selected,JSON.stringify(notes));
        setText('');
        setNotes(notes);
    };
    
    const handleBack=()=>{
        setSelected('');
        navigate('/');
    }

    return(
        <div className='mobile-notespage-container'>
            <div className='mobile-notespage-title-area'>
                <img src={back} alt='previous' onClick={handleBack}/>
                <div className='mobile-notespage-title-color' style={{backgroundColor:bgcolor}}>
                    {initials}    
                </div>
                <div className='mobile-notespage-title'>
                    {selectedTitle}
                </div>
            </div>
            <div className='mobile-notespage-content-area'>
                {notes.map((note, index)=>(
                    <MobileNotesContent key={index} note={note}/>
                ))}
            </div>
            <div className='mobile-notespage-input-area'>
                <textarea id='mobile-notespage-textarea' value={text} placeholder='Enter your text here.......' onKeyDown={(e)=>{if(e.key==='Enter'){e.preventDefault(); handleSaveNotes()}}} onChange={(e)=>{setText(e.target.value)}}></textarea>
                <img src={enter} alt='enter-btn' onClick={handleSaveNotes}/>
            </div>
        </div>
    )
}
export default NotesMob;