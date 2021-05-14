import React from 'react';

function RemoveButton({ todo, onClickRemove }) {
  return (
    <button
      type="button"
      onClick={() => onClickRemove(todo)}
    >
      완료
    </button>
  );
}

export default RemoveButton;
