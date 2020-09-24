import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    inputValue: '',
    todoItems: [],

  });

  const { inputValue, todoItems } = state;

  function handleDoneButtonClick(selectedItem) {
    const newTodoItems = todoItems.filter((item) => item.id !== selectedItem.id);
    setState({ inputValue, todoItems: newTodoItems });
  }

  function handleInputSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setState({ inputValue: '', todoItems: [...todoItems, { todo: inputValue, id: new Date() }] });
  }

  function handleInputChange(event) {
    setState({ inputValue: event.target.value, todoItems });
  }

  return (
    <Page
      todoItems={todoItems}
      value={inputValue}
      onInputSubmit={handleInputSubmit}
      onDoneButtonClick={handleDoneButtonClick}
      onInputChange={handleInputChange}
    />
  );
}

export default App;
