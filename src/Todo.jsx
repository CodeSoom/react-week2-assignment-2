import React, { useState } from 'react';
import List from './List';

export default function Todo() {
  const [userInput, setUserInput] = useState({
    text: '',
  });

  function handleChange(e) {
    setUserInput({ text: e.target.value });
  }

  return (
    <p>
      <h1>To-do</h1>
      <input type="text" onChange={handleChange} />
      <button type="button">
        추가
      </button>
      <List items={[1, 2, 3, 4]} />
    </p>
  );
}
