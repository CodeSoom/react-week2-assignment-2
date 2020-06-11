import React from 'react';

import TodoHeaderTemplate from './TodoHeaderTemplate';

export default function TodoHeader({ onClick, inputValue, handleChange }) {
  return (
    <TodoHeaderTemplate
      inputValue={inputValue}
      onClick={onClick}
      handleChange={handleChange}
    />
  );
}
