import React from 'react';

export default function TodoRemoveButton({ todo, onClickRemove }) {
  return (
    <button
      type="button"
      onClick={() => onClickRemove(todo)}
    >
      완료
    </button>
  );
}
