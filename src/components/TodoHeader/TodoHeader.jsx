import React from 'react';

import TodoHeaderTemplate from './TodoHeaderTemplate';

export default function TodoHeader({
  onClick, inputValueState, handleChange, clearInputValue,
}) {
  return (
    <TodoHeaderTemplate
      inputValueState={inputValueState}
      onClick={onClick}
      handleChange={handleChange}
      clearInputValue={clearInputValue}
    />
  );
}
