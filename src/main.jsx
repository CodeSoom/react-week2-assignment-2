import React from 'react';

import TodoInput from './todoInput';
import TodoList from './todolist';

export default function Main({
  todoInput,
  updateInput,
  updateTodoList,
  todoList,
  onClickComplete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        todoInput={todoInput}
        updateInput={updateInput}
        updateTodoList={updateTodoList}
      />
      <TodoList
        todoList={todoList}
        onClickComplete={onClickComplete}
      />
    </div>
  );
}
