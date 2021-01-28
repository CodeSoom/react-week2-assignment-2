import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Page({ todos, handleAddTodo, handleDeleteTodo }) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Page;
