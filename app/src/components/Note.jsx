import './Note.css'
let Note=({  item, deleteNote })=>{

    let timer = 500,timeout;

    const FormatDate=(value)=>{
        if(!value) return ''
        const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
        const date = new Date(value);
        let hrs = date.getHours();
        let AmPm = hrs>12?'PM':'AM';
        hrs = hrs?hrs:'12';
        hrs = hrs>12?(hrs=24-hrs):hrs;

        let min = date.getMinutes();
        min = min<10?'0'+min:min;
        let day = date.getDate();
        let month = months[date.getMonth()]

        return `${hrs}:${min} ${AmPm} ${day} ${month}`
    }
     
    const updateText = (text,id)=>{
        
        let notes = JSON.parse(localStorage.getItem('react_notes'));
        notes = notes.map(note => {
            if(note?.id === id) note.text = text;
            return note;
        });
        localStorage.setItem('react_notes',JSON.stringify(notes));
    }

    return (
        <div key={item.id} className="note" style={{backgroundColor:item.color}}>
            <textarea name="" defaultValue={item.text} onChange={(e)=>updateText(e.target.value,item.id)}></textarea>
            <div className="con">
                <p>{FormatDate(item.time)}</p>
                <i className="fa-solid fa-trash" onClick={()=>deleteNote(item.id)}></i>
            </div>
        </div>
    )
}
export default Note 