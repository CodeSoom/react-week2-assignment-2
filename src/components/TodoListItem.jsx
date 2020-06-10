import React from 'react';

export default function TodoListItem({ todo, onRemoveTodoItem }) {
  return (
    <li>
      {todo}
      <button type="button" onClick={onRemoveTodoItem}>
        완료
      </button>
    </li>
  );
}
