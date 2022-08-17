import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NotesContext } from "../contexts/NotesContext";
import Notes from "./Notes";
import Note from "./Note";
import { notesData } from "../data/notesData";
import uuid from "react-uuid";



function App() {

  const [allNotes, setAllNotes] = React.useState(notesData);
  const [activeNote, setActiveNote] = React.useState(false);

  function handleAddNote(){
    const newNote = {
      name:'Новая заметка',
      description:'Новая заметка',
      status:'waiting',
      id: uuid(),
      visible: true,
    }

    setActiveNote(newNote);
    setAllNotes([newNote,...allNotes])
  }


  function updateNote(changedNote){
    setAllNotes(allNotes.map((note)=>{
      if(note.id === changedNote.id){
        return changedNote
      }
      return note
    }))
  }

  function handleDeleteNote(id){
    if(activeNote.id === id){
      setActiveNote(false);
    }
    setAllNotes(allNotes.filter((note) => note.id !== id))
  }

  function handleSearchNote (word){
    setAllNotes(allNotes.map((note) => {
      if(!note.name.toLowerCase().startsWith(word.toLowerCase())){
        note.visible = false
      } else {
        note.visible = true
      }
      return note
    }));
  }

  function handleEditStatus(stat){
    setAllNotes(allNotes.map((note)=>{
      if(note.id === activeNote.id){
        return {
          name: activeNote.name,
          description: activeNote.description,
          status: stat,
          id: activeNote.id,
          visible: activeNote.visible,
        }
      }
      return note
    }))
  }

  return (
    <div className="App">
      <Header/>
        <div className='container'>
          <Notes allNotes={allNotes} onClick={handleAddNote} activeNote={activeNote} setActiveNote={setActiveNote} handleDeleteNote={handleDeleteNote} handleSearchNote={handleSearchNote}/>
          <Note activeNote={activeNote} updateNote={updateNote} handleEditStatus={handleEditStatus}/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;