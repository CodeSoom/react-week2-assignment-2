import React, { useState } from 'react';

import Todo from './Todo';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [value, setValue] = useState('');

  function handleDoneButtonClick(selectedItem) {
    const newTodoItems = todoItems
      .filter((item) => item.id !== selectedItem.id)
      .map((item, index) => ({ todo: item.todo, id: `todo ${index}` }));
    setTodoItems(newTodoItems);
  }

  function handleInputSubmit(event) {
    event.preventDefault();
    if (!value.trim()) return;
    const newItemId = `todo ${todoItems.length}`;
    setTodoItems([...todoItems, { todo: value, id: newItemId }]);
    setValue('');
  }

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <Todo
      todoItems={todoItems}
      value={value}
      onInputSubmit={handleInputSubmit}
      onDoneButtonClick={handleDoneButtonClick}
      onInputChange={handleInputChange}
    />
  );
}

export default App;
