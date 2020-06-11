import React, { useState } from 'react';

import TodoTemplate from './TodoTemplate';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    inputValue: '',
  });

  const { todos, inputValue } = state;

  function generateKey() {
    if (todos.length === 0) {
      return 0;
    }
    return Math.max(...todos.map(({ key }) => key)) + 1;
  }

  function handleClickAdd() {
    setState({
      todos: [...todos, { content: inputValue, key: generateKey() }],
      inputValue: '',
    });
  }

  function handleClickRemove(target) {
    setState({
      todos: todos.filter(({ key }) => key !== target),
      inputValue,
    });
  }

  function handleInputValueChange({ target }) {
    const { value } = target;
    setState({
      todos,
      inputValue: value,
    });
  }

  return (
    <TodoTemplate
      state={state}
      onClickAdd={handleClickAdd}
      onClickRemove={handleClickRemove}
      handleInputValueChange={handleInputValueChange}
    />
  );
}
