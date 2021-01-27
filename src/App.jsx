import React, { useRef, useState } from 'react';

import Page from './Page';

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(todos.length + 1);

  function handleAddTodo(todo) {
    const newTodo = {
      id: nextId.current,
      content: todo,
    };

    // eslint-disable-next-line no-shadow
    setTodos((todos) => (
      [...todos, newTodo]
    ));

    nextId.current += 1;
  }

  function handleDeleteTodo(deleteTodoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== deleteTodoId));
  }

  return (
    <Page todos={todos} handleAddTodo={handleAddTodo} handleDeleteTodo={handleDeleteTodo} />
  );
}

export default App;
