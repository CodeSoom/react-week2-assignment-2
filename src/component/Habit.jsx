import React from 'react';

function Habit({ onClickDelete, text }) {
  return (
    <div>
      {text}
      <button
        onClick={onClickDelete}
        type="button"
      >
        완료
      </button>
    </div>
  );
}
export default Habit;
