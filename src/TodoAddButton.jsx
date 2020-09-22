import React from 'react';

function TodoAddButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      추가
    </button>
  );
}

export default TodoAddButton;
