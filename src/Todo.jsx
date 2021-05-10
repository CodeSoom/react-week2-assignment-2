import React, { useState } from 'react';
import List from './List';

export default function Todo() {
  const [userInput, setUserInput] = useState({ text: '' });
  const [todoItems, setTodoItems] = useState({ items: [] });

  function handleChange(e) {
    setUserInput({ text: e.target.value });
  }

  function deleteItem(id) {
    setTodoItems(({ items }) => ({
      items: items.filter((item) => item.id !== id),
    }));
  }

  function addItem() {
    setTodoItems(({ items }) => {
      const newId = items.length ? items[items.length - 1].id + 1 : 0;
      const newContent = userInput.text;
      return {
        items: [...items, { id: newId, content: newContent }],
      };
    });
    document.getElementById('inputBox').value = '';
  }

  return (
    <p>
      <h1>To-do</h1>
      <input id="inputBox" type="text" onChange={handleChange} />
      <button type="button" onClick={addItem}>
        추가
      </button>
      <List items={todoItems.items} onClick={deleteItem} />
    </p>
  );
}
