import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todos, setTodos] = useState([]);

  const handleClickAdd = (value) => {
    const lastTodo = todos[todos.length - 1];
    const newTodo = {
      key: lastTodo ? lastTodo.key + 1 : 0,
      value,
    };

    setTodos([...todos, newTodo]);
  };

  const handleClickRemove = (key) => {
    const filteredTodos = todos.filter((todo) => todo.key !== key);

    setTodos(filteredTodos);
  };

  return (
    <Page
      todos={todos}
      onClickAdd={handleClickAdd}
      onClickComplete={handleClickRemove}
    />
  );
}

export default App;
