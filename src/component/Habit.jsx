import React from 'react';

function Habit({ onClickDelete, text, id }) {
  return (
    <div>
      {text}
      <button
        onClick={() => onClickDelete(id)}
        type="button"
      >
        완료
      </button>
    </div>
  );
}
export default Habit;
