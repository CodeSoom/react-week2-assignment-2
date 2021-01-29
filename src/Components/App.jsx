import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todo, setTodo] = useState({
    todoText: '',
    todoList: [],
  });

  const { todoText, todoList } = todo;

  const handleTextChange = (event) => {
    setTodo({
      todoText: event.target.value,
      todoList: [...todoList],
    });
  };

  const handleAddButton = () => {
    setTodo({
      todoText: '',
      todoList: [...todoList, todoText],
    });
  };

  function handleDeleteButton(event) {
    todoList.splice(todoList.indexOf(event.target.name), 1);
    setTodo({
      todoText,
      todoList,
    });
  }

  return (
    <Page
      todoText={todoText}
      todoList={todoList}
      textChange={handleTextChange}
      addButton={handleAddButton}
      deleteButton={handleDeleteButton}
    />
  );
}

export default App;
