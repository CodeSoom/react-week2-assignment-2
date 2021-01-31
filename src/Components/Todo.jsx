import React from 'react';

function Todo({
  value, onDeleteButton,
}) {
  return (
    <li>
      {value}
      <button
        type="button"
        onClick={() => onDeleteButton(value)}
      >
        완료
      </button>
    </li>
  );
}

export default Todo;
