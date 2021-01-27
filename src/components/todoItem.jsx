import React from 'react';

export default function TodoItem({ todoItem }) {
  return (
    <li>
      <span>{ todoItem.contents }</span>
      <button
        type="button"
      >
        완료
      </button>
    </li>
  );
}
