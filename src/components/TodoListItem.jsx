import React from 'react';

export default function TodoListItem({ todo, onRemove }) {
  return (
    <li>
      {todo}
      <button type="button" onClick={onRemove}>
        완료
      </button>
    </li>
  );
}
