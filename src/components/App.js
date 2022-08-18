import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import Note from "./Note";
import { notesData } from "../data/notesData";
import uuid from "react-uuid";



function App() {
  //Хуки состояния для выбора активной заметки и массива всех заметок.
  const [allNotes, setAllNotes] = React.useState(notesData);
  const [activeNote, setActiveNote] = React.useState(false);


  //Функция отвечает за создание новой заметки
  function handleAddNote(){
    const newNote = {
      name:'Новая заметка',
      description:'Новая заметка',
      status:'waiting',
      id: uuid(),
      visible: true,
    }
    //Делаем только что созданную заметку активной
    setActiveNote(newNote);
    //Добавляем новую заметку в список всех заметок
    setAllNotes([newNote,...allNotes])
  }

  //Функция отвечает за обновление данных в заметке
  function updateNote(changedNote){
    // Перебираем массив заметок,
    // ищем нужную нам заметку по id,
    // когда находим, вместо неё возвращаем измененную копию
    setAllNotes(allNotes.map((note)=>{
      if(note.id === changedNote.id){
        return changedNote
      }
      return note
    }))
  }

  //Функция отвечает за удаление заметки
  function handleDeleteNote(id){
    //Условной конструкцией убираем возможность редактирования заметки, которую пытаемся удалить
    if(activeNote.id === id){
      setActiveNote(false);
    }
    // Отправляем в функцию сеттер новый массив
    setAllNotes(allNotes.filter((note) => note.id !== id))
  }


  //Функция отвечает за поиск заметки
  function handleSearchNote (word){
    // Перебираем массив заметок,
    // проверяем, удовлетворяет ли заметка 
    // параметрам поиска, в зависимости от этого меняем её видимость,
    // возвращаем заметку, отправляем наш массив в функцию сеттер
    setAllNotes(allNotes.map((note) => {
      if(!note.name.toLowerCase().startsWith(word.toLowerCase())){
        note.visible = false
      } else {
        note.visible = true
      }
      return note
    }));
  }

  return (
    <div className="App">
      <Header/>
        <div className='container'>
          <Notes allNotes={allNotes} onClick={handleAddNote} activeNote={activeNote} setActiveNote={setActiveNote} handleDeleteNote={handleDeleteNote} handleSearchNote={handleSearchNote}/>
          <Note activeNote={activeNote} updateNote={updateNote}/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;