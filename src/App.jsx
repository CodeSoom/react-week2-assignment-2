import React, { useState } from 'react';

import TodoApp from './TodoApp';

function getUUID() {
  function s4() {
    return ((1 + Math.random()) * 0x10000 || 0).toString(16).substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const handleRemoveTodoItem = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (title === '') {
      return;
    }

    setTodos([
      ...todos,
      {
        id: getUUID(),
        title,
      },
    ]);

    setTitle('');
  };

  return (
    <TodoApp
      todos={todos}
      title={title}
      onRemoveTodoItem={handleRemoveTodoItem}
      onInputChange={handleInputChange}
      onInputSubmit={handleInputSubmit}
    />
  );
}
