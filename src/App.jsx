import React, { useState } from 'react';

import MainPage from './MainPage';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleChangeInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleClickAddTodo = () => {
    setTodoList([todoInput, ...todoList]);
    setTodoInput('');
  };

  const handleClickDone = (content) => {
    setTodoList(todoList.filter((item) => item !== content));
  };

  return (
    <MainPage
      todoList={todoList}
      todoInput={todoInput}
      onChange={handleChangeInput}
      onClickAdd={handleClickAddTodo}
      onClickDone={handleClickDone}
    />
  );
}

export default App;
