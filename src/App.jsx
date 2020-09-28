import React, { useState } from 'react';

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
          id: new Date().toISOString(),
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
