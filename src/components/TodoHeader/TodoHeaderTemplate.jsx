import React from 'react';

import TodoAddInput from './TodoAddInput';
import TodoAddButton from './TodoAddButton';

export default function TodoHeaderTemplate({ inputValue, handleChange, onClick }) {
  return (
    <div>
      <TodoAddInput inputValue={inputValue} onChange={handleChange} />
      <TodoAddButton onClick={onClick} />
    </div>
  );
}
