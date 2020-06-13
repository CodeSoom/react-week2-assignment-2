import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    newTodo: '',
  });
  const { todos, newTodo } = state;

  const generateId = () => Date.now().toString();

  function handleChange(event) {
    setState({
      todos,
      newTodo: event.target.value,
    });
  }

  function handleSubmit(event) {
    const newId = generateId();

    setState({
      todos: [...todos, { id: newId, content: newTodo }],
      newTodo: '',
    });
    event.preventDefault();
  }

  function handleClickComplete(completedId) {
    setState({
      todos: todos.filter((todo) => todo.id !== completedId),
      newTodo: '',
    });
  }

  return (
    <Page
      todos={todos}
      newTodo={newTodo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClickComplete={handleClickComplete}
    />
  );
}
