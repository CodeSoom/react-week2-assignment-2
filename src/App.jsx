import React, { useState } from 'react';
import Page from './components/Page';
import Todos from './components/domain/Todos';

export default function App() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState(new Todos());

  const handleClick = () => {
    setTodos(todos.pushTitle(title));
    setTitle('');
  };

  const handleChange = ({ target: { value } }) => {
    setTitle(value);
  };

  return (
    <Page title={title} onChange={handleChange} todos={todos} onClick={handleClick} />
  );
}
