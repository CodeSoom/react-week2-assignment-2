import React, { useState } from 'react';

import TodoHeaderTemplate from './TodoHeaderTemplate';

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
    <TodoHeaderTemplate
      inputValue={inputValue}
      onClick={onClick}
      handleChange={handleChange}
      clearInputValue={clearInputValue}
    />
  );
}
