import React from "react";

function Notes(props){

    return(
        <div className="notes">
            <div className="notes__head">
                <h2 className="notes__title">Заметки</h2>
                <button className="notes__add-button" onClick={props.onClick}></button>
            </div>
            <input placeholder="Найти заметку по имени" onChange={(e)=>props.handleSearchNote(e.target.value)}/>
            {/* Перебираем массив заметок и рендерим каждую */}
            {props.allNotes.map((note)=>{
                return(
                <div className={`notes__container ${note.id === props.activeNote.id && "notes__container_active"} ${!note.visible && "notes__container_not-visible"}`} onClick={()=>{
                    // Добавляем возможноть сбрасывания активной заметки
                    if(note.id === props.activeNote.id){
                        props.setActiveNote(false);
                    } else{
                       props.setActiveNote(note); 
                    }
                    }} key={note.id}>
                    <div className="notes__name-container">
                        <p className={`notes__name ${note.status === "waiting" && "notes__name_waiting"} ${note.status === "inProgress" && "notes__name_in-progress"} ${note.status === "done" && "notes__name_done"}`}>{note.name}</p>
                        <button className="notes__delete-button" onClick={(e)=>{
                            // Предотвращаем погружение события
                            e.stopPropagation()
                            props.handleDeleteNote(note.id)
                            }}/>
                    </div>
                    <p className="notes__description">{note.description}</p>
                </div>)
            })}
        </div>
    )
}

export default Notes