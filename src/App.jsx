import React, { useState } from 'react';

import Todo from './Todo';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleDoneButtonClick(selectedItem) {
    const newTodoItems = todoItems.filter((item) => item.id !== selectedItem.id);
    setTodoItems(newTodoItems);
  }

  function handleInputSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setTodoItems([...todoItems, { todo: inputValue, id: new Date() }]);
    setInputValue('');
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <Todo
      todoItems={todoItems}
      value={inputValue}
      onInputSubmit={handleInputSubmit}
      onDoneButtonClick={handleDoneButtonClick}
      onInputChange={handleInputChange}
    />
  );
}

export default App;
