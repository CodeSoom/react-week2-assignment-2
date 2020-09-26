import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todos, setTodos] = useState({
    inputValue: '',
    todo: [],
  });
  const {
    inputValue,
    todo,
  } = todos;

  const handleClickAdd = () => {
    const lastTodo = todo[todo.length - 1];
    const newTodo = {
      key: lastTodo ? lastTodo.key + 1 : 0,
      value: inputValue,
    };

    setTodos({
      inputValue: '',
      todo: [...todo, newTodo],
    });
  };

  const handleClickRemove = (key) => {
    const filteredTodos = todo.filter((todoItem) => todoItem.key !== key);

    setTodos({
      ...todos,
      todo: filteredTodos,
    });
  };

  const handleChangeInput = (event) => {
    setTodos({
      ...todos,
      inputValue: event.target.value,
    });
  };

  return (
    <Page
      inputValue={inputValue}
      todo={todo}
      onChangeInput={handleChangeInput}
      onClickAdd={handleClickAdd}
      onClickComplete={handleClickRemove}
    />
  );
}

export default App;
