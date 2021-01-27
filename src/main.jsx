import React from 'react';

import TodoInput from './todoInput';
import TodoList from './todolist';

export default function Main({
  todoInput,
  updateInput,
  appendTodoList,
  todoList,
  onClickComplete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        value={todoInput}
        onChange={updateInput}
        onClick={appendTodoList}
      />
      <TodoList
        todoList={todoList}
        onClickComplete={onClickComplete}
      />
    </div>
  );
}
