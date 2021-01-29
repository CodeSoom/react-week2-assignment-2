import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    input: '',
  });

  const { todos, input } = state;

  const handleChangeInput = (event) => {
    const currentInput = event.target.value;
    setState({ todos, input: currentInput });
  };

  const handleClickAddTodo = (event) => {
    event.preventDefault();
    setState({ todos: [...todos, { id: todos.length + 1, title: input }], input: '' });
  };

  const handleClickCompleted = (todoId) => {
    const incompletedTodos = todos.filter((todo) => (todo.id !== todoId));
    setState({ todos: incompletedTodos }, input);
  };

  return (
    <Page
      todos={todos}
      title={input}
      onChange={handleChangeInput}
      onClickAddTodo={handleClickAddTodo}
      onClick={handleClickCompleted}
    />
  );
}
