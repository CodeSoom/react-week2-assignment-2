import React from 'react';

import InputBox from './InputBox';
import TodoList from './TodoList';

function Todo({ addTodoItem, todoItems, removeSelectedTodo }) {
  return (
    <div>
      <h1>To-do</h1>
      <InputBox addInputValue={addTodoItem} />
      <TodoList todoItems={todoItems} removeSelectedTodo={removeSelectedTodo} />
    </div>
  );
}
export default Todo;
