import uuid from "react-uuid";

export const notesData =[{
    name:'Научиться дизайну',
    description:'Научиться делать крутой дизайн для своих pet-проектов. И не лениться располагать их по БЭМ nested :)',
    status:'waiting',
    id: uuid(),
    visible: true,
  },{
    name:'Помыть посуду',
    description:'Помыть посуду, ведь скоро приходят гости!',
    status:'done',
    id: uuid(),
    visible: true,
  },{
    name:'Погулять с собакой',
    description:'Пёс начал грызть диван, его точно нужно выгулять.',
    status:'inProgress',
    id: uuid(),
    visible: true,
  },{
    name:'Добавить адаптив',
    description:'Подумать, как будут располагаться блоки при уменьшении размера экрана и разработать адаптив',
    status:'waiting',
    id: uuid(),
    visible: true,
  }]