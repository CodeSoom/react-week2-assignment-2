import React from 'react';

function Todo({ todo, confirmTodo, id }) {
  return (
    <li>
      {todo}
      <button
        type="button"
        onClick={() => confirmTodo(id)}
      >
        완료
      </button>
    </li>
  );
}

export default Todo;
