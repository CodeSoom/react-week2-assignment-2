import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    const lastTodo = [...todos].pop();
    const newTodo = {
      key: lastTodo ? lastTodo.key + 1 : 0,
      value,
    };

    setTodos([...todos, newTodo]);
  };

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
    addTodo(value);
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
