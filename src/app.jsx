import React, { useState } from 'react';

import Main from './main';

export default function App() {
  const [state, setState] = useState({
    todoInput: '',
    todoList: [],
  });

  const { todoInput, todoList } = state;

  function onClickComplete(index) {
    setState({
      ...state,
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
    });
  }

  function updateInput(value) {
    setState({
      ...state,
      todoInput: value,
    });
  }

  function updateTodoList(value) {
    if (value === '') return;
    if (todoList.includes(value)) return;

    setState({
      ...state,
      todoInput: '',
      todoList: [...todoList, value],
    });
  }

  return (
    <Main
      todoInput={todoInput}
      updateInput={updateInput}
      updateTodoList={updateTodoList}
      todoList={todoList}
      onClickComplete={onClickComplete}
    />
  );
}
