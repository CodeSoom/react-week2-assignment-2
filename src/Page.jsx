import React from 'react';

import Register from './Register';
import ToDoList from './ToDoList';

export default function Page({
  toDoInput, toDos, handleToDoInput, createToDo, deleteToDo,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Register
        toDoInput={toDoInput}
        handleToDoInput={handleToDoInput}
        createToDo={createToDo}
      />
      <ToDoList
        toDos={toDos}
        deleteToDo={deleteToDo}
      />
    </div>
  );
}
