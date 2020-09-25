import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MainPage from './MainPage';

function App() {
  const [state, setState] = useState({
    todoInput: '',
    todos: [],
  });

  const { todoInput, todos } = state;

  const handleChangeInput = (content) => {
    setState({
      todoInput: content,
      todos: [...todos],
    });
  };

  const handleClickAddTodo = () => {
    setState({
      todoInput: '',
      todos: [{
        id: uuidv4(),
        content: todoInput,
      },
      ...todos],
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
