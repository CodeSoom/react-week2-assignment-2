import React from 'react';

function TodoItem({ id, item, onRemove }) {
  return (
    <p>
      {id}
      .
      {item}
      <button type="button" onClick={() => onRemove(id)}>
        완료
      </button>
    </p>
  );
}

export default TodoItem;
