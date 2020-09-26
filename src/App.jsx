import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    inputValue: '',
    todoItems: [],
  });

  const { inputValue, todoItems } = state;

  function handleDoneClick(selectedId) {
    const newTodoItems = todoItems.filter((item) => item.id !== selectedId);
    setState({ ...state, todoItems: newTodoItems });
  }

  function handleInputSubmit(event) {
    event.preventDefault();
    setState({ inputValue: '', todoItems: [...todoItems, { todo: inputValue, id: new Date() }] });
  }

  function handleInputChange(event) {
    setState({ ...state, inputValue: event.target.value });
  }

  return (
    <Page
      todoItems={todoItems}
      value={inputValue}
      onInputSubmit={handleInputSubmit}
      onDoneButtonClick={handleDoneClick}
      onInputChange={handleInputChange}
    />
  );
}

export default App;
