import React from 'react';
import TodoInput from './TodoInput';

const h1Style = {
  textAlign: 'center',
};

export default function TodoAppHeader({
  input, onInputChange, onInputSubmit,
}) {
  return (
    <div>
      <h1 style={h1Style}>To-do</h1>
      <div>
        <TodoInput
          input={input}
          onInputChange={onInputChange}
          onInputSubmit={onInputSubmit}
        />
      </div>
    </div>
  );
}
