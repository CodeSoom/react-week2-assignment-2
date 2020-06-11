import React, { useState } from 'react';

import TodoPage from './templates/TodoPage';

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: '할 일',
    },
    {
      id: 2,
      text: '아무것도 하지 않기',
    },
  ]);

  const removeItemById = (todoItems, id) => {
    const index = todoItems.findIndex((i) => i.id === id);
    return [...todoItems.slice(0, index), ...todoItems.slice(index + 1)];
  };

  const handleComplete = (todoItems, id) => {
    setItems(removeItemById(items, id));
  };

  return (
    <>
      <TodoPage
        items={items}
        onComplete={(id) => handleComplete(items, id)}
      />
    </>
  );
}
