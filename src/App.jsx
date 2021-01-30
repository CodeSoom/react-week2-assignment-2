import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    const newTodo = {
      id: todos.length + 1,
      content: todo,
    };

    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Page
        todos={todos}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
