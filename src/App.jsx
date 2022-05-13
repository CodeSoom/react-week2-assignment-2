import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  function onSubmit(e) {
    e.preventDefault();

    setTodoItems([...todoItems, e.target.todo.value]);
    e.target.todo.value = '';
  }

  return (
    <Page
      todoItems={todoItems}
      setTodoItems={setTodoItems}
      onSubmit={onSubmit}
    />
  );
}
