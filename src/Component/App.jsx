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
    const tempArray = [...items];
    tempArray.push({ id: items.length + 1, value: text });
    setItem(tempArray);
    setText('');
  }

  function deleteItem(item) {
    const tempArray = [...items];
    tempArray.splice(items.indexOf(item), 1);
    setItem(tempArray);
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
