import React from "react";
import { NotesContext } from "../contexts/NotesContext";

function Note(props){
    
    const notesData = React.useContext(NotesContext);
    React.useEffect(()=>{
        setName(props.activeNote.name);
        setDescription(props.activeNote.description);
    },[])

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(value){
        props.activeNote.name = value;
        props.updateNote(props.activeNote);
    }
    function handleChangeDescription(value){
        props.activeNote.description = value;
        props.updateNote(props.activeNote);
    }

    if(!props.activeNote){
        return(
            <div className="note">
                <p>Выберите заметку</p>
            </div>
        )
      }

    return(
        <div className="note">
            <div className="note__button-container">
                <button className="note__button-waiting" onClick={()=>props.handleEditStatus('waiting')}/>
                <button className="note__button-in-progress" onClick={()=>props.handleEditStatus('inProgress')}/>
                <button className="note__button-done"onClick={()=>props.handleEditStatus('done')}/>
            </div>
            <input value={props.activeNote.name} className="note__input-name" type="text" id="title" onChange={(e) => handleChangeName(e.target.value)} placeholder="Название заметки"/>
            <textarea value={props.activeNote.description} className="note__input-description" id="description" onChange={(e) => handleChangeDescription(e.target.value)} placeholder="Описание заметки"/>
        </div>
    )
}

export default Note



