import React, { useState } from 'react';

import TodoPage from './templates/TodoPage';

export default function App() {
  const [items, setItems] = useState([]);

  const removeItemById = (todoItems, id) => {
    const index = todoItems.findIndex((i) => i.id === id);
    return [...todoItems.slice(0, index), ...todoItems.slice(index + 1)];
  };

  const handleComplete = (todoItems, id) => {
    setItems(removeItemById(items, id));
  };

  const handleCreate = (todoItems, text) => {
    const lastId = Math.max(...todoItems.map((i) => i.id));
    const item = {
      id: lastId + 1,
      text,
    };
    setItems([...items, item]);
  };

  return (
    <>
      <TodoPage
        items={items}
        onComplete={(id) => handleComplete(items, id)}
        onCreate={(text) => handleCreate(items, text)}
      />
    </>
  );
}
