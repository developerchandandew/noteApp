import { useState } from "react";
import Note from "./Note"
import './NoteContainer.css'; 
let NoteContainer=({notes, deleteNote })=>{
    const reversed=(arr)=>{
        const array = [];
        for(let i = arr.length-1;i>0;--i){
            array.push(arr[i]);
        }
        return array
    }

    const sortedNotes = reversed(notes);

    return (
        <div className="notecontainer">
            <h1>React Notes</h1>
            <div className="note-container-notes">
            {
            sortedNotes?.length > 0
                ?
                    sortedNotes?.map((item, index)=>
                        <Note key={item.id} item={item} deleteNote={deleteNote}></Note>
                    )
                :
                    <h1>No Recorded Notes</h1>}
            </div>
        </div>
    )
}
export default NoteContainer