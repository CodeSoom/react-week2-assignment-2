import React from 'react';

function Todo({ id, content, onClickDelete }) {
  return (
    <li>
      {content}
      <button type="button" onClick={() => onClickDelete(id)}>
        완료
      </button>
    </li>
  );
}

export default Todo;
