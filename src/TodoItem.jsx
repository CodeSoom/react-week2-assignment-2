import React from 'react';

function TodoItem({
  key, index, text, onClickRemove,
}) {
  return (
    <p>
      {index}
      .
      {text}
      <button type="button" onClick={() => onClickRemove(key)}>
        완료
      </button>
    </p>
  );
}

export default TodoItem;
