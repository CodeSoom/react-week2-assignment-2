import React from 'react';

import TodoAddInput from './TodoAddInput';
import TodoAddButton from './TodoAddButton';

export default function TodoHeaderTemplate({
  inputValue, handleChange, onClick, clearInputValue,
}) {
  return (
    <div>
      <TodoAddInput inputValue={inputValue} onChange={handleChange} />
      <TodoAddButton inputValue={inputValue} onClick={onClick} clearInput={clearInputValue} />
    </div>
  );
}
