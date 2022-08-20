import React from "react";

function Note(props){

    // const [width, setWidth] = React.useState('260px')

    //Функция меняет имя у выбранной активной заметки
    function handleChangeName(value){
        //Выбираем свойство name и меняем значение, на полученное из контроллируемого инпута
        props.activeNote.name = value;
        props.updateNote(props.activeNote);
    }
    //Функция меняет описание у выбранной активной заметки
    function handleChangeDescription(value){
        //Выбираем свойство description и меняем значение, на полученное из контроллируемого инпута
        props.activeNote.description = value;
        props.updateNote(props.activeNote);
    }
    //Функция меняет статус у выбранной активной заметки
    function handleChangeStatus(value){
        //Выбираем свойство status и меняем значение, на полученное из контроллируемого инпута
        props.activeNote.status = value;
        props.updateNote(props.activeNote);
    }


    //если активная заметка не выбрана, то просим пользователя выбрать заметку
    if(!props.activeNote){
        return(
            <div className="note">
                <div className="note__line" onMouseDown={props.handleEditSize}></div>
                <div className="note__container">
                    <p>Выберите заметку</p>
                </div>
            </div>
        )
      }

    return(
        <div className="note">
            <div className="note__line" onMouseDown={props.handleEditSize}></div>
            <div className="note__container">
                <div className="note__button-container">
                    {/* По нажатию кнопки меняем цветовую индикацию состояния выполнения заметки на "ОЖИДАЕТ"*/}
                    <button className="note__button-waiting" onClick={()=>handleChangeStatus('waiting')}/>
                    {/* По нажатию кнопки меняем цветовую индикацию состояния выполнения заметки на "В ПРОЦЕССЕ"*/}
                    <button className="note__button-in-progress" onClick={()=>handleChangeStatus('inProgress')}/>
                    {/* По нажатию кнопки меняем цветовую индикацию состояния выполнения заметки на "ВЫПОЛНЕНА"*/}
                    <button className="note__button-done"onClick={()=>handleChangeStatus('done')}/>
                </div>
                <input value={props.activeNote.name} className="note__input-name" type="text" id="title" onChange={(e) => handleChangeName(e.target.value)} placeholder="Название заметки"/>
                <textarea value={props.activeNote.description} className="note__input-description" id="description" onChange={(e) => handleChangeDescription(e.target.value)} placeholder="Описание заметки"/>
            </div>
        </div>
    )
}

export default Note



