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

  function handleDeleteButton(event) {
    todos.splice(todos.indexOf(event.target.name), 1);
    setTodo({
      todoText,
      todos,
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
