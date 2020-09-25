import React, { useState } from 'react';

import TodoPage from './TodoPage';

function App() {
  const [state, setState] = useState({
    newTodo: '',
    todos: [],
  });

  const { newTodo, todos } = state;

  function handleClickAdd() {
    const nextId = (todos.length === 0) ? 1 : todos[todos.length - 1].id + 1;

    setState({
      todos: [...todos, { id: nextId, content: newTodo }],
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
      newTodo: e.target.value,
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
