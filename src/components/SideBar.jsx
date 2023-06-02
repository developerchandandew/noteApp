import {useState} from 'react';
import './SideBar.css';
let SideBar=({addNote})=>{
    const [list,setList] = useState(false);
    const colors = ['#fe9b72','#fec971','#00d4fe','#b693fd','#e4ee91']
    return (
        <div className="sidebar">
            <h1 onClick={()=>setList(!list)}><i className="fa-sharp fa-solid fa-plus"></i></h1>

            <ul className={`color-list ${list?'color-list-active':''}`}>

                {colors.map((item,index)=>
                <li key={index} className='list-item' style={{backgroundColor:item}} onClick={()=>addNote(item)} ></li>
                )}
            </ul>
        </div>
        
    )
}
export default SideBar