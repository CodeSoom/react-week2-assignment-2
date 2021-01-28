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

    setTodos([...todos, newTodo]);

    nextId.current += 1;
  }

  function handleDeleteTodo(deleteTodoId) {
    setTodos(todos.filter((todo) => todo.id !== deleteTodoId));
  }

  return (
    <Page todos={todos} handleAddTodo={handleAddTodo} handleDeleteTodo={handleDeleteTodo} />
  );
}

export default App;
