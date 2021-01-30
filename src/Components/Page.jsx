import React from 'react';

import ViewTodoList from './ViewTodoList';
import AddTodo from './AddTodo';

import './Page.css';

function Page({
  todoText, todos, onTextChange, onAddTodo, onDeleteButton,
}) {
  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddTodo
        todoText={todoText}
        onTextChange={onTextChange}
        onAddTodo={onAddTodo}
      />
      <ViewTodoList
        todos={todos}
        onDeleteButton={onDeleteButton}
      />
    </div>
  );
}

export default Page;
