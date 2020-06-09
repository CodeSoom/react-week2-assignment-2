import React, { useState } from 'react';

export default function TodoAddInput() {
  const [state, setState] = useState({
    inputValue: '',
  });

  const { inputValue } = state;

  function handleChange() {
    setState({
      inputValue: document.getElementById('todo-input').value,
    });
  }

  return (
    <input id="todo-input" value={inputValue} onChange={handleChange} />
  );
}
