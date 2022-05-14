import { useState } from 'react';

import { ToDoForm } from './ToDoForm';
import { ToDoItems } from './ToDoItems';

import toDo from './constant/todo';

export function ToDoList() {
  const [toDoText, setToDoText] = useState('');
  const [toDos, setToDos] = useState([]);

  const addToDo = (e) => {
    e.preventDefault();

    if (toDoText === '') {
      return;
    }

    setToDos([...toDos, toDoText]);
    setToDoText('');
  };

  const handleChange = (e) => {
    setToDoText(e.target.value);
  };

  const handleClear = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div>
      <h1>{toDo.label}</h1>
      <ToDoForm onChange={handleChange} onClick={addToDo} toDoText={toDoText} />
      <ToDoItems toDos={toDos} onClick={handleClear} />
    </div>
  );
}
