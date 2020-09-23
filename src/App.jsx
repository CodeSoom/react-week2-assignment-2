import React, { useState } from 'react';

import TodoPage from './TodoPage';

function App() {
  const [state, setState] = useState({
    todo: {
      id: 1,
      content: '',
    },
    todos: [],
  });

  const { todo, todos } = state;

  function handleClickAdd() {
    setState({
      todo: { id: todo.id + 1, content: '' },
      todos: [...todos, todo],
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
      todo: { ...todo, content: e.target.value },
    });
  }

  return (
    <TodoPage
      todo={todo}
      todos={todos}
      onChangeTodo={handleChangeTodo}
      onClickAdd={handleClickAdd}
      onClickFinish={handleClickFinish}
    />
  );
}

export default App;
