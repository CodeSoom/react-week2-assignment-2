import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Page({
  todoTitle,
  todoItems,
  onTodoTitleSubmit,
  onTodoTitleChange,
  onDoneClick,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoForm
        todoTitle={todoTitle}
        onTodoTitleSubmit={onTodoTitleSubmit}
        onTodoTitleChange={onTodoTitleChange}
      />
      <TodoList
        todoItems={todoItems}
        onDoneClick={onDoneClick}
      />
    </div>
  );
}
export default Page;
