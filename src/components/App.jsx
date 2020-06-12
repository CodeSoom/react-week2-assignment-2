import React, { useState } from 'react';

import TodoPage from './templates/TodoPage';

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const removeItemById = (todoItems, id) => {
    const index = todoItems.findIndex((i) => i.id === id);
    return [...todoItems.slice(0, index), ...todoItems.slice(index + 1)];
  };

  const getLastId = (todoItems) => (todoItems.length === 0 ? 0
    : Math.max(...todoItems.map((i) => i.id)));

  const handleComplete = (todoItems, id) => {
    setItems(removeItemById(items, id));
  };

  const handleSubmit = (todoItems, text) => {
    const lastId = getLastId(todoItems);
    const item = {
      id: lastId + 1,
      text,
    };
    setItems([...items, item]);
    setInput('');
  };

  const handleInputChange = (inputValue) => {
    setInput(inputValue);
  };

  return (
    <>
      <TodoPage
        items={items}
        input={input}
        onComplete={(id) => handleComplete(items, id)}
        onSubmit={() => handleSubmit(items, input)}
        onInputChange={(text) => handleInputChange(text)}
      />
    </>
  );
}
