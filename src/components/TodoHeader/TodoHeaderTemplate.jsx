import React from 'react';

import TodoAddInput from './TodoAddInput';
import TodoAddButton from './TodoAddButton';

export default function TodoHeaderTemplate({
  inputValueState, handleChange, onClick, clearInputValue,
}) {
  return (
    <div>
      <TodoAddInput inputValueState={inputValueState} onChange={handleChange} />
      <TodoAddButton
        inputValueState={inputValueState}
        onClick={onClick}
        clearInput={clearInputValue}
      />
    </div>
  );
}
