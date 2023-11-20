import React from 'react'
import { useEffect, useState, useRef } from 'react';
import '../desktop-Sidebar/SidebarDesktop.css'
import PopupDesktop from '../desktop-Popup/PopupDesktop';
import NotesHeaderDesktop from '../desktop-notesHeader/NotesHeaderDesktop';

function SidebarDesktop({selected, setSelected}){
    const[titles, setTitles]=useState([]);
    const[ghead, setGhead]=useState(
        localStorage.getItem('groupNames') || []
    );
    const[showPopup, setShowPopup]=useState(false);
    const popupRef = useRef(null);

    useEffect((e)=>{
        const data = localStorage.getItem('groupNames')
        if(data){
            setGhead(JSON.parse(data));
        }else{
            setGhead([]);
        }
    },[]);
    useEffect(()=>{
        if(ghead.length>0){
            const obj = JSON.parse(localStorage.getItem('groupNames'));
            const result = Object.keys(obj).map((key)=>[obj[key]]);
            setTitles(result);
        }
    }, [ghead]);

    const handleClick=()=> {
        setShowPopup(!showPopup);
    }
    const handleClose=()=>{
        setShowPopup(false);
    }
    const handleDocumentClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
          setShowPopup(false);
        }
      };
    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
          document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    return(
        <div className='sidebarContainer'>
            <h1 className='header'>Pocket Notes</h1>
            <div className='btn-container'>
                <button onClick={handleClick}>  
                        <p className='adder'>+</p>
                        <p>Create Notes group</p>
                </button>
            </div>
            <div className='desktop-notes-title-area'>
            {titles.length >0 &&titles.map((title,index)=>(
                <NotesHeaderDesktop
                selected={selected}
                setSelected={setSelected}
                key={index} 
                title={title}
                />
            ))}
            </div>
            {showPopup &&(
                <div className='popup-desktop-container'>
                <div className='popup-here' ref={popupRef}>
                <PopupDesktop
                ghead={ghead}
                setGhead={setGhead}
                onClose={handleClose}
                />
                </div>
            </div>)}
        </div>
    );
}
export default SidebarDesktop;