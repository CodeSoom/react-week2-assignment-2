import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (key) => {
    const findedIndex = todos.findIndex((todo) => todo.key === key);
    if (typeof findedIndex !== 'number') {
      return;
    }

    const copiedTods = [...todos];
    copiedTods.splice(findedIndex, 1);

    setTodos(copiedTods);
  };

  const handleClickAdd = (value) => {
    const lastTodo = todos[todos.length - 1];
    const newTodo = {
      key: lastTodo ? lastTodo.key + 1 : 0,
      value,
    };

    setTodos([...todos, newTodo]);
  };

  const handleClickComplete = (key) => {
    removeTodo(key);
  };

  return (
    <Page
      todos={todos}
      onClickAdd={handleClickAdd}
      onClickComplete={handleClickComplete}
    />
  );
}

export default App;
