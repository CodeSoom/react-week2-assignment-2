import React from 'react';
import Input from './Input';
import TodoList from './TodoList';

function Todo({ addTodoItem, todoItems, removeTodoItem }) {
  return (
    <div>
      <h1>To-do</h1>
      <Input addTodoItem={addTodoItem} />
      <TodoList todoItems={todoItems} deleteTodoItem={removeTodoItem} />
    </div>
  );
}
export default Todo;
