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
      ...todo,
      todoText: event.target.value,
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
      onTextChange={handleTextChange}
      onAddButton={handleAddButton}
      onDeleteButton={handleDeleteButton}
    />
  );
}

export default App;
