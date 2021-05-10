import React from 'react';
import TodoButton from './TodoButton';

function Todo({ todo, onClickRemove }) {
  return (
    <li>
      {todo}
      <TodoButton
        todo={todo}
        onClickRemove={onClickRemove}
      />
    </li>
  )
}

export default Todo;
