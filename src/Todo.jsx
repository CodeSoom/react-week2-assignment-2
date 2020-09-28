import React from 'react';

function Todo({
  todo: { id, title },
  onClickDelete,
}) {
  return (
    <div>
      {title}
      <button type="button" onClick={() => onClickDelete(id)}>
        완료
      </button>
    </div>
  );
}

export default Todo;
