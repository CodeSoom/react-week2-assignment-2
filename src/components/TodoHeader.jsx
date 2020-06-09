import React from 'react';

import TodoAddButton from './TodoAddButton';

export default function TodoHeader({ onClick }) {
  return (
    <div>
      <input id="todo-input" />
      <TodoAddButton onClick={onClick} />
    </div>
  );
}
