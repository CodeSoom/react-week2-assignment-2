import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    todoContent: '',
  });

  const { todos, todoContent } = state;

  function handleCompletedClick(id) {
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
    return todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  }

  function handleAddClick() {
    const todo = {
      id: getId(),
      content: todoContent,
    };

    setState({
      todos: [...todos, todo],
      todoContent: '',
    });
  }

  return (
    <Page
      todos={todos}
      todoContent={todoContent}
      onCompletedClick={handleCompletedClick}
      onChangeContent={handleChangeContent}
      onAddClick={handleAddClick}
    />
  );
}
