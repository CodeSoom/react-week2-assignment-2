import React, { useState } from 'react';

import TodoTemplate from './TodoTemplate';

export default function App() {
  const [state, setState] = useState({
    todos: [],
  });

  const { todos } = state;

  function generateKey() {
    if (todos.length === 0) {
      return 0;
    }
    return Math.max(...todos.map(({ key }) => key)) + 1;
  }

  function handleClickAdd(todoContent) {
    setState({
      todos: todos.concat(
        { content: todoContent, key: generateKey() },
      ),
    });
  }

  function handleClickRemove(target) {
    setState({
      todos: todos.filter(({ key }) => key !== target),
    });
  }

  return (
    <TodoTemplate
      todos={todos}
      onClickAdd={handleClickAdd}
      onClickRemove={handleClickRemove}
    />
  );
}
