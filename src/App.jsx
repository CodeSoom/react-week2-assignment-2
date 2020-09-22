import React, { useState } from 'react';
import TodoPage from './TodoPage';

function App() {
  const [state, setState] = useState({
    todo: '',
    todos: [],
    isEmpty: true,
  });

  const { todo, todos, isEmpty } = state;

  function handleClickAdd() {
    if (todo === '') {
      return;
    }

    todos.push(todo);

    setState({
      ...state,
      todo: '',
      isEmpty: false,
    });
  }

  function handleClickFinish(index) {
    todos.splice(index, 1);

    const isEmptyCheck = (todos.length === 0);

    setState({
      ...state,
      isEmpty: isEmptyCheck,
    });
  }

  function handleChangeTodo(e) {
    setState({
      ...state,
      todo: e.target.value,
    });
  }

  return (
    <TodoPage
      todo={todo}
      todos={todos}
      isEmpty={isEmpty}
      handleChangeTodo={handleChangeTodo}
      handleClickAdd={handleClickAdd}
      handleClickFinish={handleClickFinish}
    />
  );
}

export default App;
