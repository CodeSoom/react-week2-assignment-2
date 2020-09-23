import React from 'react';

import InputBox from './InputBox';
import TodoList from './TodoList';

function Todo({
  onClickAddButton, onInputChange, value, todoItems, removeSelectedTodo,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <InputBox value={value} onClickAddButton={onClickAddButton} onInputChange={onInputChange} />
      <TodoList todoItems={todoItems} removeSelectedTodo={removeSelectedTodo} />
    </div>
  );
}
export default Todo;
