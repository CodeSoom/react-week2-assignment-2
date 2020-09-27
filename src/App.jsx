import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    todoTitle: '',
    todoItems: [],
  });

  const { todoTitle, todoItems } = state;

  function handleDoneClick(id) {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setState({
      ...state,
      todoItems: newTodoItems,
    });
  }

  function handleTodoTitleSubmit(event) {
    event.preventDefault();
    setState({
      todoTitle: '',
      todoItems: [...todoItems, { todo: todoTitle, id: new Date() }],
    });
  }

  function handleTodotitleChange(event) {
    setState({
      ...state,
      todoTitle: event.target.value,
    });
  }

  return (
    <Page
      todoItems={todoItems}
      todoTitle={todoTitle}
      onTodoTitleSubmit={handleTodoTitleSubmit}
      onDoneClick={handleDoneClick}
      onTodoTitleChange={handleTodotitleChange}
    />
  );
}

export default App;
