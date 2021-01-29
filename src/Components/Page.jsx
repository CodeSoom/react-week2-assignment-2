import React from 'react';

import AddTodo from './AddTodo';
import ViewTodoList from './ViewTodoList';

import './Page.css';

function Page({
  todoText, todoList, textChange, addButton, deleteButton,
}) {
  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddTodo
        todoText={todoText}
        todoList={todoList}
        textChange={textChange}
        addButton={addButton}
      />
      <ViewTodoList
        todoList={todoList}
        deleteButton={deleteButton}
      />
    </div>
  );
}

export default Page;
