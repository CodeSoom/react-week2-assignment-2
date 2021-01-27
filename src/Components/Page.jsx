import React from 'react';

import AddTodo from './AddTodo';
import ViewTodoList from './ViewTodoList';

import './Page.css';

function Page({ todoText, todoList, setTodo }) {
  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddTodo todoText={todoText} todoList={todoList} setTodo={setTodo} />
      <ViewTodoList todoText={todoText} todoList={todoList} setTodo={setTodo} />
    </div>
  );
}

export default Page;
