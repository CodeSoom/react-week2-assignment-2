import React, { useState } from 'react';

import TodoPage from './TodoPage';

function App() {
  const [state, setState] = useState({
    newId: 1,
    newTodo: '',
    todos: [],
  });

  const { newId, newTodo, todos } = state;

  function handleClickAdd() {
    setState({
      newId: newId + 1,
      todos: [...todos, { id: newId, content: newTodo }],
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
