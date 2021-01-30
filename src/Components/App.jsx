import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todo, setTodo] = useState({
    todoText: '',
    todos: [],
  });

  const { todoText, todos } = todo;

  const handleTextChange = (event) => {
    setTodo({
      todoText: event.target.value,
      todos: [...todos],
    });
  };

  const handleAddButton = () => {
    setTodo({
      todoText: '',
      todos: [...todos, todoText],
    });
  };

  function handleDeleteButton(value) {
    const newTodos = todos.filter((item) => item !== value);
    setTodo({
      todoText,
      todos: newTodos,
    });
  }

  return (
    <Page
      todoText={todoText}
      todos={todos}
      textChange={handleTextChange}
      addButton={handleAddButton}
      deleteButton={handleDeleteButton}
    />
  );
}

export default App;
