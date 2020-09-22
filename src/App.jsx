import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleClickAdd = () => {
    const lastTodo = todos[todos.length - 1];
    const newTodo = {
      key: lastTodo ? lastTodo.key + 1 : 0,
      value: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleClickRemove = (key) => {
    const filteredTodos = todos.filter((todo) => todo.key !== key);

    setTodos(filteredTodos);
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Page
      inputValue={inputValue}
      todos={todos}
      onChangeInput={handleChangeInput}
      onClickAdd={handleClickAdd}
      onClickComplete={handleClickRemove}
    />
  );
}

export default App;
