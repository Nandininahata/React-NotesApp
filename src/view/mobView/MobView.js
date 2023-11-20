import React from 'react';
import {useState, useRef, useEffect} from 'react'
import PopupMob from '../../components/mobileSide/mobile-Popup/PopupMob';
import MobileNotesHeader from '../../components/mobileSide/mobile-notesHeader/MobileNotesHeader';
import '../mobView/MobView.css'

function MobView({selected, setSelected}){
    const[titles, setTitles]=useState([]);
    const[ghead, setGhead]=useState(
        localStorage.getItem('groupNames') || []
    );
    const[showPopup, setShowPopup]=useState(false);
    const popupRef = useRef(null);

    useEffect(()=>{
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
        
            <div className='home-mobile-container'> 
                <h1 className='home-mobile-heading'>Pocket Notes</h1>
                <div className='mobile-btn-container'>
                <button  onClick={handleClick}>  
                    <p className='adder'>+</p>
                    <p>Create Notes group</p>
                </button>
                </div>
                <div className='mobile-notes-title-area' style={{overflowY:'scroll',marginTop:'10px'}}>
                {titles.length >0 &&titles.map((title,index)=>(
                <MobileNotesHeader
                selected={selected}
                setSelected={setSelected}
                key={index} 
                title={title}
                />
                ))}
                </div>
                {showPopup &&(
                    <div className='mobile-Popup-container'>
                        <div className='mobile-Popup-here' ref={popupRef}>
                        <PopupMob
                        ghead={ghead}
                        setGhead={setGhead}
                        onClose={handleClose}/>
                        </div>
                    </div>
                    )}
            </div>
    )
}

export default MobView;

