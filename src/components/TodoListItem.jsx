import React from 'react';

export default function TodoListItem({ todo, onClickRemoveTodo }) {
  return (
    <li>
      {todo}
      <button type="button" onClick={onClickRemoveTodo}>
        완료
      </button>
    </li>
  );
}
