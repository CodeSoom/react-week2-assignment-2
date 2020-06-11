import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItem] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    if (!text) return;
    const todos = [...items];
    // 혹시 아래처럼 쓴 방식도 Guard Clauses 에 해당하나요?
    if (items.length) todos.push({ id: todos[todos.length - 1].id + 1, value: text });
    if (!items.length) todos.push({ id: 1, value: text });
    setItem(todos);
    setText('');
  }

  function deleteItem(item) {
    setItem([...items].filter((i) => i.id !== item.id));
  }

  return (
    <Page
      items={items}
      text={text}
      handleChange={handleChange}
      handleClick={handleClick}
      deleteItem={deleteItem}
    />
  );
}
