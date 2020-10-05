import React, { useState } from 'react';

import TodoPage from './TodoPage';

function App() {
  const [state, setState] = useState({
    newId: 1,
    todoContent: '',
    todos: [],
  });

  const { newId, todoContent, todos } = state;

  function handleClickAdd() {
    setState({
      newId: newId + 1,
      todos: [...todos, { id: newId, content: todoContent }],
    });
  }

  function handleClickDelete(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  function handleChangeTodo(e) {
    setState({
      ...state,
      todoContent: e.target.value,
    });
  }

  return (
    <TodoPage
      todoContent={todoContent}
      todos={todos}
      onChangeTodo={handleChangeTodo}
      onClickAdd={handleClickAdd}
      onClickFinish={handleClickDelete}
    />
  );
}

export default App;
