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

  //Хук состояния для ширины контейнера со всеми заметками
  const [width, setWidth] = React.useState(260)

  //Функция изменения ширины контейнера со всеми заметками
  function handleEditSize(e){
    //Вычисляем начальню позицию курсора мыши, когда мы захватываем разделитель двух блоков

    // Фиксируем начальное положение
    const startPosition = e.pageX
    //Функция, срабатывающая при движении мыши
    function onMouseMove(evt){
      // у нас есть два крайних значения ширины элемента: 250 и 700.
      if(width + evt.pageX - startPosition <= 250){
        //Если мы пытаемся выставить ширину меньше 250, то у нас это не получится сделать
        setWidth(250)
      } else if(width + evt.pageX - startPosition >= 700){
        //Если мы пытаемся выставить ширину больше 700, то у нас это не получится сделать
        setWidth(700)
      } else {
        // Если мы находимся в диапазоне от 250 до 700, то выставляем ширину, вычесленную по формуле ниже,
        // где ширина окна - позиция курсора мыши по оси X - изначальное положение 
        setWidth(width + evt.pageX - startPosition)
      }
      
    }
    //Когда отпускаем кнопку мыши, удаляется слушатель с документа
    function onMouseUp(){
      document.removeEventListener('mousemove', onMouseMove)
    }

    //навешиваем слушатели на документ, которые сработают при движении мыши с зажатой клавишей и при отжатии клавиши
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }


  //Функция отвечает за создание новой заметки
  function handleAddNote(){
    // Создаем экземпляр новой заметки
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
          <Notes width={width} allNotes={allNotes} onClick={handleAddNote} activeNote={activeNote} setActiveNote={setActiveNote} handleDeleteNote={handleDeleteNote} handleSearchNote={handleSearchNote}/>
          <Note activeNote={activeNote} updateNote={updateNote} handleEditSize={handleEditSize}/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;