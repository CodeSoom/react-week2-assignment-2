import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MainPage from './MainPage';

function App() {
  const [state, setState] = useState({
    todoInput: '',
    todos: [],
  });

  const { todoInput, todos } = state;

  const handleChangeInput = (e) => {
    setState({
      todoInput: e.target.value,
      todos: [...todos],
    });
  };

  const handleClickAddTodo = () => {
    setState({
      todoInput: '',
      todos: [
        ...todos,
        {
          id: uuidv4(),
          content: todoInput,
        },
      ],
    });
  };

  const handleClickDeleteTodo = (id) => {
    setState({
      todoInput,
      todos: todos.filter((item) => item.id !== id),
    });
  };

  return (
    <MainPage
      todos={todos}
      todoInput={todoInput}
      onChangeContent={handleChangeInput}
      onClickAdd={handleClickAddTodo}
      onClickDelete={handleClickDeleteTodo}
    />
  );
}

export default App;
