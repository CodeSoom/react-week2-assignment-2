import React from 'react';

export default function TodoListItem({ todo }) {
  return (
    <li>
      {todo}
      <button type="button">
        완료
      </button>
    </li>
  );
}
