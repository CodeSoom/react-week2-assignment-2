import React from 'react';

import ViewTodoList from './ViewTodoList';
import AddTodo from './AddTodo';

import './Page.css';

function Page({
  todoText, todos, textChange, addButton, deleteButton,
}) {
  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddTodo
        todoText={todoText}
        textChange={textChange}
        addButton={addButton}
      />
      <ViewTodoList
        todos={todos}
        deleteButton={deleteButton}
      />
    </div>
  );
}

export default Page;
