import React from 'react';
import InputBox from './InputBox';
import TodoList from './TodoList';

function Todo({ addTodoItem, todoItems, removeTodoItem }) {
  return (
    <div>
      <h1>To-do</h1>
      <InputBox AddInputValue={addTodoItem} />
      <TodoList todoItems={todoItems} deleteTodoItem={removeTodoItem} />
    </div>
  );
}
export default Todo;
