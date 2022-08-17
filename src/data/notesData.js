import uuid from "react-uuid";

export const notesData =[{
    name:'Научиться дизайну',
    description:'Понять, как делать крутой дизайн для своих pet-проектов',
    status:'waiting',
    id: uuid(),
    visible: true,
  },{
    name:'Помыть посуду',
    description:'Иначе мама будет злиться',
    status:'done',
    id: uuid(),
    visible: true,
  },{
    name:'Погулять с собакой',
    description:'Иначе папа будет злиться',
    status:'inProgress',
    id: uuid(),
    visible: true,
  },{
    name:'Добавить адаптив',
    description:'Наконец-то найти дизайнера(самому выучиться на дизайнера) и совместными усилиями сделать красивый адаптив',
    status:'waiting',
    id: uuid(),
    visible: true,
  }]