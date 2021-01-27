import React, { useState } from 'react';

import TodoInput from './todoInput';
import TodoList from './todolist';

export default function Main() {
  const [state, setState] = useState({
    todoList: [],
  });

  const { todoList } = state;

  function appendTodoList(value) {
    if (value === '') return;
    if (todoList.includes(value)) return;

    setState({
      todoList: [...todoList, value],
    });
  }

  function onClickComplete(index) {
    setState({
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        appendTodoList={appendTodoList}
      />
      <TodoList
        todoList={todoList}
        onClickComplete={onClickComplete}
      />
    </div>
  );
}
