import React from 'react';

function TodoList({ todo, confirmTodo, idx }) {
  return (
    <li>
      {todo}
      <button
        type="button"
        onClick={() => confirmTodo(idx)}
      >
        완료
      </button>
    </li>
  );
}

export default TodoList;
