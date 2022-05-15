import React, { useState } from 'react';
import uuid from 'react-uuid';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    todo: '',
  });

  const { todos, todo } = state;

  function handleSubmit() {
    setState({
      todos: [...todos, { id: uuid(), content: todo }],
      todo: '',
    });
  }

  function handleInputChange(value) {
    setState({
      ...state,
      todo: value,
    });
  }

  function handleFinishClick(finishedTodo) {
    setState({
      ...state,
      todos: todos.filter((item) => item.id !== finishedTodo.id),
    });
  }

  return (
    <Page
      onClick={handleFinishClick}
      onSubmit={handleSubmit}
      onChange={handleInputChange}
      todos={todos}
      todo={todo}
    />

  );
}
