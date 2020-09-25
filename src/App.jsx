import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MainPage from './MainPage';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleChangeInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleClickAddTodo = () => {
    setTodoList([
      {
        id: uuidv4(),
        content: todoInput,
      },
      ...todoList,
    ]);
    setTodoInput('');
  };

  const handleClickDeleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <MainPage
      todoList={todoList}
      todoInput={todoInput}
      onChange={handleChangeInput}
      onClickAdd={handleClickAddTodo}
      onClickDelete={handleClickDeleteTodo}
    />
  );
}

export default App;
