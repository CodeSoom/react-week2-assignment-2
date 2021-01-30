import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    userTitle: '',
  });

  const { todos, userTitle } = state;

  const handleChangeUserTitle = (event) => {
    const currentUserTitle = event.target.value;
    setState({ todos, userTitle: currentUserTitle });
  };

  const handleClickAddTodo = (event) => {
    event.preventDefault();
    setState({
      todos: [...todos,
        { id: todos.length + 1, title: userTitle }],
      userTitle: '',
    });
  };

  const handleClickCompleted = (todoId) => {
    const incompletedTodos = todos.filter((todo) => (todo.id !== todoId));
    setState({ todos: incompletedTodos, userTitle });
  };

  return (
    <Page
      todos={todos}
      title={userTitle}
      onChange={handleChangeUserTitle}
      onClickAddTodo={handleClickAddTodo}
      onClick={handleClickCompleted}
    />
  );
}
