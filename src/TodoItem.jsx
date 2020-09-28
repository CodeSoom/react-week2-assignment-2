import React from 'react';

function TodoItem({
  id, index, text, onClickRemove,
}) {
  return (
    <p>
      {index}
      .
      {text}
      <button type="button" onClick={() => onClickRemove(id)}>
        완료
      </button>
    </p>
  );
}

export default TodoItem;
