import React, { useState } from 'react';

export default function TodoAddInput() {
  const [state, setState] = useState({
    inputValue: '',
  });

  const { inputValue } = state;

  function handleChange({ target }) {
    const { value } = target;
    setState({
      inputValue: value,
    });
  }

  return (
    <input id="todo-input" value={inputValue} onChange={(e) => handleChange(e)} />
  );
}
