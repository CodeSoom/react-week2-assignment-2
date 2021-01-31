import React from 'react';

export default function TodoItem({ todoItem, handleDelete }) {
  return (
    <li>
      <span>{ todoItem.contents }</span>
      <button
        type="button"
        onClick={() => handleDelete(todoItem)}
      >
        완료
      </button>
    </li>
  );
}
