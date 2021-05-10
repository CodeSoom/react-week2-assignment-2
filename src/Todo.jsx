import React, { useState } from 'react';
import List from './List';

export default function Todo() {
  const [userInput, setUserInput] = useState({ text: '' });
  const [todoItems, setTodoItems] = useState({ items: [{ id: 1, content: 'dqdq' }] });

  function handleChange(e) {
    setUserInput({ text: e.target.value });
  }

  function deleteItem(id) {
    setTodoItems(({ items }) => ({
      items: items.filter((item) => item.id !== id),
    }));
  }

  return (
    <p>
      <h1>To-do</h1>
      <input type="text" onChange={handleChange} />
      <button type="button">
        추가
      </button>
      <List items={todoItems.items} onClick={deleteItem} />
    </p>
  );
}
