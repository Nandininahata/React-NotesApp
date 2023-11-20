import React,{ useState } from 'react'
import '../desktop-Popup/PopupDesktop.css'
 
function PopupDesktop({
    ghead,
    setGhead,
    onClose, }) {

    const [groupName,setGroupName]=useState("");
    const [bgcolor,setBgcolor]=useState("");

    const handleColor=(e)=>{
        const div = e.target;
        setBgcolor(getComputedStyle(div).backgroundColor);
    };

    const svName=()=>{  
        const newGroup = {name: groupName, color: bgcolor};
        setGhead([...ghead, newGroup]);
        localStorage.setItem(
            "groupNames",
            JSON.stringify([...ghead, newGroup]));
        onClose();
        };
    return(
      <div className='popup-container'>
        <div className='popup-heading'>
            <h2>Create New Notes group</h2>
            <div className='close-btn' onClick={onClose}>x</div>
        </div>
        <div className='name-input-area'>
            <label htmlFor='name-input' style={{marginTop:'3px'}}>Group Name</label>
            <input
                value={groupName}
                onChange={(e)=>{setGroupName(e.target.value);}}
                type='text' id='name-input' placeholder='Enter your group name...'/><br></br>
        </div>
        <div className='color-input-area'>
            <p>Choose Color</p>
            <div className='color-container'>
                <div
                className={`color-input-1 ${bgcolor === "rgb(179, 139, 250)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`color-input-2 ${bgcolor === "rgb(255, 121, 242)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`color-input-3 ${bgcolor === "rgb(67, 230, 252)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`color-input-4 ${bgcolor === "rgb(241, 149, 118)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`color-input-5 ${bgcolor === "rgb(0, 71, 255)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`color-input-6 ${bgcolor === "rgb(102, 145, 255)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
            </div>
        </div>
        <div className='create-btn'>
                <button onClick={svName} disabled={groupName.length===0 || bgcolor==='' }>Create</button>
        </div>
      </div> 
    )
}

export default PopupDesktop;