import React, { useState } from 'react';

import TodoAddInput from './TodoAddInput';
import TodoAddButton from './TodoAddButton';

export default function TodoHeader({ onClick }) {
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

  function clearInputValue() {
    setState({
      inputValue: '',
    });
  }

  return (
    <div>
      <TodoAddInput inputValue={inputValue} onChange={handleChange} />
      <TodoAddButton inputValue={inputValue} onClick={onClick} clearInput={clearInputValue} />
    </div>
  );
}
