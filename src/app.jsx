import React, { useState } from 'react';

import Main from './main';

export default function App() {
  const [state, setState] = useState({
    todoInput: '',
    todoList: [],
  });

  const { todoInput, todoList } = state;

  function setInput(e) {
    setState({
      ...state,
      todoInput: e.target.value,
    });
  }

  function getInput() {
    if (todoInput === '') return;
    if (todoList.includes(todoInput)) return;

    setState({
      todoInput: '',
      todoList: [...todoList, todoInput],
    });
  }

  function onClickComplete(index) {
    setState({
      ...state,
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
    });
  }

  return (
    <Main
      setInput={setInput}
      getInput={getInput}
      todoList={todoList}
      todoInput={todoInput}
      onClickComplete={onClickComplete}
    />
  );
}
