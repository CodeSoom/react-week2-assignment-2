import React, { useState } from 'react';

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
    </p>
  );
}
