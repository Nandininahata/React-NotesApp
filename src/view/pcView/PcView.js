import React,{useState} from 'react'
import '../pcView/PcView.css'
import NotesDesktop from '../../components/desktopSide/desktop-Notes/NotesDesktop';
import HomeDesktop from '../../components/desktopSide/desktop-Home/HomeDesktop';
import SidebarDesktop from '../../components/desktopSide/desktop-Sidebar/SidebarDesktop';

function PcView(){
    const [selected, setSelected] = useState("");
    const [notes, setNotes] = useState([]);

    return(
        <div className='Home'>
            <SidebarDesktop selected={selected} setSelected={setSelected} />
            {selected.length > 0 ? (
                <NotesDesktop notes={notes} setNotes={setNotes} selected={selected} setSelected={setSelected} />
              ) : (
                <HomeDesktop/>
              )}
        </div>
    )
}
export default PcView;