import React from 'react';

function TodoItem({ id, item, onClickRemove }) {
  return (
    <p>
      {id}
      .
      {item}
      <button type="button" onClick={() => onClickRemove(id)}>
        완료
      </button>
    </p>
  );
}

export default TodoItem;
