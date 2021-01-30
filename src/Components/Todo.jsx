import React from 'react';

function Todo({
  value, deleteButton,
}) {
  return (
    <li>
      {value}
      <button
        type="button"
        onClick={() => deleteButton(value)}
      >
        완료
      </button>
    </li>
  );
}

export default Todo;
