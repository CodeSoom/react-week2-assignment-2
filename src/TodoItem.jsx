import React from 'react';

export default function TodoItem({
  todoItem: { id, contents },
  handleClickDelete,
}) {
  return (
    <li>
      <p>{ contents }</p>
      <button
        type="button"
        onClick={() => handleClickDelete(id)}
      >
        완료
      </button>
    </li>
  );
}
