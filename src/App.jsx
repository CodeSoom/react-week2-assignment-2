import React, { useState } from 'react';

import TodoPage from './TodoPage';

function App() {
  const [state, setState] = useState({
    newTodo: {
      id: 1,
      content: '',
    },
    todos: [],
  });

  const { newTodo, todos } = state;

  function handleClickAdd() {
    setState({
      newTodo: { id: newTodo.id + 1, content: '' },
      todos: [...todos, newTodo],
    });
  }

  function handleClickFinish(id) {
    setState({
      ...state,
      todos: todos.filter((item) => item.id !== id),
    });
  }

  function handleChangeTodo(e) {
    setState({
      ...state,
      newTodo: { ...newTodo, content: e.target.value },
    });
  }

  return (
    <TodoPage
      newTodo={newTodo}
      todos={todos}
      onChangeTodo={handleChangeTodo}
      onClickAdd={handleClickAdd}
      onClickFinish={handleClickFinish}
    />
  );
}

export default App;
