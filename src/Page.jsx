import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Page({
  value, todoItems, onInputSubmit, onInputChange, onDoneButtonClick,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoForm value={value} onInputSubmit={onInputSubmit} onInputChange={onInputChange} />
      <TodoList todoItems={todoItems} onDoneButtonClick={onDoneButtonClick} />
    </div>
  );
}
export default Page;
