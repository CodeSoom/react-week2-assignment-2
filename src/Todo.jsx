import React from 'react';

function Todo({ todo: { text, id }, onClickDelete }) {
  return (
    <li>
      {text}
      <button type="button" onClick={() => onClickDelete(id)}>
        완료
      </button>
    </li>
  );
}

export default Todo;
