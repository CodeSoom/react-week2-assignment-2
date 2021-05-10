import React from 'react';
import TodoButton from './TodoButton';

function Todo({ todo }) {
  return (
    <li>
      {todo}
      <TodoButton />
    </li>
  )
}

export default Todo;
