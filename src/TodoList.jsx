import React from 'react';

function TodoList({ todo, confirmTodo, id }) {
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

export default TodoList;
