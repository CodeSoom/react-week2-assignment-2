import React from 'react';

function TodoItem({ value, onClick }) {
  return (
    <li>
      {value}
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
