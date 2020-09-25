import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MainPage from './MainPage';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleChangeInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleClickAddTodo = () => {
    setTodos([
      {
        id: uuidv4(),
        content: todoInput,
      },
      ...todos,
    ]);
    setTodoInput('');
  };

  const handleClickDeleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <MainPage
      todos={todos}
      todoInput={todoInput}
      onChange={handleChangeInput}
      onClickAdd={handleClickAddTodo}
      onClickDelete={handleClickDeleteTodo}
    />
  );
}

export default App;
