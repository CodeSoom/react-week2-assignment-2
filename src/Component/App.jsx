import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    if (!text) return;
    setItems([...items, { id: new Date().valueOf() + Math.random(), value: text }]);
    setText('');
  }

  function deleteItem(item) {
    setItems(items.filter((i) => i.id !== item.id));
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
