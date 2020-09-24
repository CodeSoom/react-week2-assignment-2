import React from 'react';

function TodoItem({ id, text, onClickRemove }) {
  return (
    <p>
      {id}
      .
      {text}
      <button type="button" onClick={() => onClickRemove(id)}>
        완료
      </button>
    </p>
  );
}

export default TodoItem;
