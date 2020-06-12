import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    ids: [],
    todos: [],
    newTodo: '',
  });
  const { ids, todos, newTodo } = state;

  const generateId = () => Date.now().toString();

  function handleChange(event) {
    setState({
      ids,
      todos,
      newTodo: event.target.value,
    });
  }

  function handleSubmit(event) {
    setState({
      ids: [...ids, generateId()],
      todos: [...todos, newTodo],
      newTodo: '',
    });
    event.preventDefault();
  }

  function handleClickComplete(completedId) {
    setState({
      ids: ids.filter((id) => id !== completedId),
      todos: todos.filter((_, index) => index !== ids.indexOf(completedId)),
    });
  }

  const addFormState = {
    newTodo,
    handleChange,
    handleSubmit,
  };

  const todoState = {
    ids,
    todos,
    handleClickComplete,
  };

  return (
    <Page
      addFormState={addFormState}
      todoState={todoState}
    />
  );
}
