import React from 'react';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

import './Page.css';

function Page({ todoText, todoList, setTodo }) {
  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddToDo todoText={todoText} todoList={todoList} setTodo={setTodo} />
      <ToDoList todoList={todoList} setTodo={setTodo} />
    </div>
  );
}

export default Page;
