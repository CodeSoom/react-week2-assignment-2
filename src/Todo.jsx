import React from 'react';

import InputBox from './InputBox';
import TodoList from './TodoList';

function Todo({
  value, todoItems, onAddButtonClick, onInputChange, onDoneButtonClick,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <InputBox value={value} onAddButtonClick={onAddButtonClick} onInputChange={onInputChange} />
      <TodoList todoItems={todoItems} onDoneButtonClick={onDoneButtonClick} />
    </div>
  );
}
export default Todo;
