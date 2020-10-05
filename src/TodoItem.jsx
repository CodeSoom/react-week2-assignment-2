import React from 'react';

function TodoItem({
  todo,
  onClick,
}) {
  return (
    <li>
      {todo}
      <button
        type="button"
        onClick={onClick}
      >
        완료
      </button>
    </li>
  );
}

export default TodoItem;
