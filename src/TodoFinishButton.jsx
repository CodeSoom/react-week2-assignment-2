import React from 'react';

function TodoFinishButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      완료
    </button>
  );
}

export default TodoFinishButton;
