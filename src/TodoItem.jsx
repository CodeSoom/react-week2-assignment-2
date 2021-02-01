import React from 'react';

export default function TodoItem({
  todoItem: { id, content },
  onClickDelete,
}) {
  return (
    <li>
      { content }
      <button
        type="button"
        onClick={() => onClickDelete(id)}
      >
        완료
      </button>
    </li>
  );
}
