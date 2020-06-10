import React from 'react';
import TodoInput from './TodoInput';

const h1Style = {
  textAlign: 'center',
};

export default function TodoAppHeader({
  onAddTodoItem, input, onInputChange, onInputSubmit,
}) {
  return (
    <div>
      <h1 style={h1Style}>To-do</h1>
      <div>
        <TodoInput
          onAddTodoItem={onAddTodoItem}
          input={input}
          onInputChange={onInputChange}
          onInputSubmit={onInputSubmit}
        />
      </div>
    </div>
  );
}
