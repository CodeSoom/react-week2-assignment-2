import React from 'react';

function TodoItem({ value }) {
  return (
    <li>
      {value}
      <button
        type="button"
      >
        완료
      </button>
    </li>
  );
}

export default TodoItem;
