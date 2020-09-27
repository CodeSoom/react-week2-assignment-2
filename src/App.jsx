import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    todoContent: '',
  });

  const { todos, todoContent } = state;

  function handleClickCompleted(id) {
    setState({
      todos: todos.filter((todo) => todo.id !== id),
      todoContent,
    });
  }

  function handleChangeContent(e) {
    setState({
      todos,
      todoContent: e.target.value,
    });
  }

  function getId() {
    return Date.now();
  }

  function handleClickAdd(e) {
    e.preventDefault();

    setState({
      todoContent: '',
      todos: [...todos, {
        id: getId(),
        content: todoContent,
      }],
    });
  }

  return (
    <Page
      todos={todos}
      todoContent={todoContent}
      onClickCompleted={handleClickCompleted}
      onChangeContent={handleChangeContent}
      onClickAdd={handleClickAdd}
    />
  );
}
