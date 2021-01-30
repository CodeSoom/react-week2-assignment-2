import React from 'react';

import ViewTodoList from './ViewTodoList';
import AddTodo from './AddTodo';

import './Page.css';

function Page({
  todoText, todos, onTextChange, onAddButton, onDeleteButton,
}) {
  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddTodo
        todoText={todoText}
        onTextChange={onTextChange}
        onAddButton={onAddButton}
      />
      <ViewTodoList
        todos={todos}
        onDeleteButton={onDeleteButton}
      />
    </div>
  );
}

export default Page;
