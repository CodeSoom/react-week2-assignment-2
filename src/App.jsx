import React, { useState } from 'react';
import Page from './components/Page';
import Todos from './components/domain/Todos';

export default function App() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState(new Todos());

  const handleClick = (newTitle) => {
    setTodos(todos.pushTitle(newTitle));
    setTitle('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Page title={title} onChange={handleChange} todos={todos} onClick={handleClick} />
  );
}
