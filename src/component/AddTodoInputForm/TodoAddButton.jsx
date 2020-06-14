import React from 'react';

function TodoAddButton({ onClickAdd }) {
  return (
    <button type="button" onClick={() => onClickAdd()}>추가</button>
  );
}

export default TodoAddButton;
