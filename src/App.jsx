import React, { useState } from 'react';

import MainPage from './MainPage';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleChangeInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleClickAddTodo = () => {
    const uuid = new Date().toString();
    setTodoList([{ id: uuid, content: todoInput }, ...todoList]);
    setTodoInput('');
  };

  const handleClickDone = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
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
