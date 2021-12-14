import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todos, setTodos] = useState([]);

  const onInsert = (text) => {
    setTodos((oldArray) => [...oldArray, { key: todos.length + 1, text }]);
  };

  const onFinish = (key) => {
    setTodos(todos.filter((item) => item.key !== key));
  };

  return <Page todos={todos} onInsert={onInsert} onFinish={onFinish} />;
}
