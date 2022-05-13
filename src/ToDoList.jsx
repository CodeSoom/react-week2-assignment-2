import React, { useState } from 'react';

import { ToDoForm } from './ToDoForm';
import { ToDoItems } from './ToDoItems';
import toDoConstant from './constant/todo';

export function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const addToDo = () => {
    if (toDo === '') return;

    setToDos([...toDos, toDo]);
    return setToDo('');
  };

  const handleChange = (e) => {
    const toDoItem = e.target.value;
    setToDo(toDoItem);
  };

  return (
    <div>
      <h1>{toDoConstant.label}</h1>
      <ToDoForm onChange={handleChange} onClick={addToDo} />
      <ToDoItems toDos={toDos} />
    </div>
  );
}
