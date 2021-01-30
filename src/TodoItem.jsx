import React from 'react';

export default function TodoItem({
  todoItem: { id, contents },
  onClickDelete,
}) {
  return (
    <li>
      { contents }
      <button
        type="button"
        onClick={() => onClickDelete(id)}
      >
        완료
      </button>
    </li>
  );
}
